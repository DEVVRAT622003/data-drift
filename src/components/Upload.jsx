import React, { useState, useContext } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  doc,
  updateDoc,
  arrayUnion,
  collection,
  addDoc,
} from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { storage, fireDB } from "../Firebase/fireConfig";
import { UserContext } from "../Context/UserProvider";
import toast from "react-hot-toast";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const { currentUser, setCurrentUser, docId } = useContext(UserContext);

  const uploadFile = async () => {
    if (file === null) return;

    const fileId = uuidv4();
    const fileRef = ref(
      storage,
      `files/${currentUser.uid}/${file.name}_${fileId}`
    );

    toast.promise(
      (async () => {
        try {
          // Upload the file
          await uploadBytes(fileRef, file);

          // Get the download URL
          const downloadURL = await getDownloadURL(fileRef);
          console.log(downloadURL); // Log the download URL for debugging

          // File details object
          const fileDetails = {
            name: name,
            url: downloadURL,
            owner: currentUser.name,
            uploadedAt: Timestamp.now(),
          };

          // Update local storage
          setCurrentUser((prev) => {
            const obj = JSON.parse(localStorage.getItem("user"));
            obj.files.push(fileDetails);
            localStorage.setItem("user", JSON.stringify(obj));
            return obj;
          });

          // Update Firestore document with arrayUnion
          const userRef = doc(fireDB, "user", docId);
          await updateDoc(userRef, {
            files: arrayUnion(fileDetails),
          });

          // Add file details to a central 'files' collection in Firestore
          const filesRef = collection(fireDB, "files");
          await addDoc(filesRef, fileDetails);

          // Reset input fields
          setName("");
          setFile(null);

          return "File uploaded successfully!";
        } catch (error) {
          console.error("Upload Error:", error);
          throw new Error("Failed to upload file.");
        }
      })(),
      {
        loading: "Uploading...",
        success: <b>File Uploaded</b>,
        error: <b>File Not Uploaded</b>,
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-50">
      <div className="flex flex-col items-center justify-center border-violet-800 bg-white rounded-xl border-2 p-5 lg:p-10 gap-5">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="bg-violet-100 rounded-lg  w-[200px] lg:w-[250px] py-2 lg:text-lg cursor-pointer "
        />
        <input
          type="text"
          placeholder="File name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300  outline-none w-[200px] lg:w-[250px] py-2 pl-3 lg:text-lg"
        />
        <button
          className="bg-violet-600 text-white px-4 py-2  hover:bg-violet-800 w-[200px] lg:w-[250px] lg:text-lg"
          onClick={uploadFile}
        >
          Upload File
        </button>
      </div>
    </div>
  );
};

export default Upload;
