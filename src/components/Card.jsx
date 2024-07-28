// import React, { useEffect, useState } from "react";
// import fileIcon from "../../public/assets/file.jpg";
// import videoIcon from "../../public/assets/video.jpg";
// import imageIcon from "../../public/assets/icon-image.jpg";
// import { UserContext } from "../Context/UserProvider";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { storage , fireDB } from "../Firebase/fireConfig";
// import toast from "react-hot-toast";
// import { collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc } from "firebase/firestore";

// const Card = ({ item , isMyProfile}) => {
//   const [type, setType] = useState("");
//   const { name, owner, url, date } = item;
//   const {isLoggedIn , docId} = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleDownload = () => {
//     if(isLoggedIn){
//       // Implement download functionality here
//     window.open(url); // Opens the URL in a new tab for download
//     }else{
//       navigate('/login');
//     }
    
//   };
  

//   const handleDelete = async (url, docId) => {
//     try {
//       // 1. Remove from storage
//       const deleteFileFromStorage = async (fileUrl) => {
//         // Decode the URL
//         const decodedUrl = decodeURIComponent(fileUrl);
//         // Base URL part to be removed
//         const baseUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.bucket}/o/`;
//         // Extract file path by removing the base URL and query parameters
//         const filePath = decodedUrl.replace(baseUrl, '').split('?')[0];
  
//         // Create a reference to the file to delete
//         const fileRef = ref(storage, filePath);
  
//         // Delete the file
//         await deleteObject(fileRef);
//       };
  
//       await deleteFileFromStorage(url);
  
//       // 2. Remove from Firestore 'files' collection
//       const filesCollection = collection(fireDB, "files");
//       const fileQuery = query(filesCollection, where("url", "==", url));
//       const querySnapshot = await getDocs(fileQuery);
//       querySnapshot.forEach(async (doc) => {
//         await deleteDoc(doc.ref);
//       });
  
//       // 3. Remove from local storage
//       const obj = JSON.parse(localStorage.getItem("user"));
//       obj.files = obj.files.filter((link) => link !== url);
//       localStorage.setItem("user", JSON.stringify(obj));
  
//       // 4. Update profile files in Firestore
//       const userRef = doc(fireDB, "user", docId);
//       await updateDoc(userRef, { files: obj.files });
  
//       alert("File deleted successfully");
//     } catch (error) {
//       console.error("Error deleting file:", error);
//       alert("Failed to delete file");
//     }
//   };


//   const categorizeFileType = (url) => {
//     // Get the file name from the URL
//     const fileName = url.substring(url.lastIndexOf("/") + 1);

//     // Get the file extension
//     const fileExtension = fileName
//       .substring(fileName.lastIndexOf(".") + 1)
//       .toLowerCase();

//     // Define accepted image and video file extensions
//     const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
//     const videoExtensions = ["mp4", "avi", "mkv", "mov", "wmv", "flv", "webm"];

//     // Check if the file extension matches image extensions
//     if (imageExtensions.includes(fileExtension)) {
//       return "image";
//     }

//     // Check if the file extension matches video extensions
//     if (videoExtensions.includes(fileExtension)) {
//       return "video";
//     }

//     // If not image or video, categorize as 'other'
//     return "file";
//   };

//   useEffect(() => {
//     if (url) {
//       setType(categorizeFileType(url));
//     }
//   }, [url]);

//   return (
//     <div
//       style={{ cursor: "pointer" }}
//       className="border-[#A56DC1] border-2 w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded-lg relative transition-all shadow-2xl hover:scale-105 bg-white"
//     >
//       <img
//         className="h-[60%] flex m-auto object-cover"
//         src={type === "image" ? url : type === "video" ? videoIcon : fileIcon}
//         alt=""
//       />
//       <div className="bg-violet-50">
//         <h2 className="text-ellipsis line-clamp-1 my-1 pl-2">{name}</h2>
//         <div className="flex items-center justify-between my-1-2 pl-2">
//           <p className="text-sm text-neutral-400">{owner}</p>
//         </div>
//         <div className="flex items-center justify-center">
//           <button
//             className="bg-[#A56DC1] m-2 py-2 w-[90%] rounded-lg text-white font-bold"
//             onClick={handleDownload}
//           >
//             Open
//           </button>
//           <button
//             className="bg-[#A56DC1] m-2 py-2 w-[90%] rounded-lg text-white font-bold"
//             onClick={handleDelete}
//           >
//             Delete
//           </button>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { useEffect, useState, useContext } from "react";
import fileIcon from "../../public/assets/file.jpg";
import videoIcon from "../../public/assets/video.jpg";
import imageIcon from "../../public/assets/icon-image.jpg";
import { UserContext } from "../Context/UserProvider";
import { useNavigate } from "react-router-dom";
import { storage, fireDB } from "../Firebase/fireConfig";
import toast from "react-hot-toast";
import { collection, deleteDoc, doc, getDocs, query, where, updateDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

const Card = ({ item, isMyProfile }) => {
  const [type, setType] = useState("");
  const { name, owner, url, date } = item;
  const { isLoggedIn, docId } = useContext(UserContext);
  const navigate = useNavigate();

  const handleDownload = () => {
    if (isLoggedIn) {
      window.open(url); // Opens the URL in a new tab for download
    } else {
      navigate('/login');
    }
  };

  const handleDelete = async () => {
    try {
      // 1. Remove from storage
      const deleteFileFromStorage = async (fileUrl) => {
        const decodedUrl = decodeURIComponent(fileUrl);
        const baseUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.bucket}/o/`;
        const filePath = decodedUrl.replace(baseUrl, '').split('?')[0];
        const fileRef = ref(storage, filePath);
        await deleteObject(fileRef);
      };

      await deleteFileFromStorage(url);

      // 2. Remove from Firestore 'files' collection
      const filesCollection = collection(fireDB, "files");
      const fileQuery = query(filesCollection, where("url", "==", url));
      const querySnapshot = await getDocs(fileQuery);
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      // 3. Remove from local storage
      const obj = JSON.parse(localStorage.getItem("user"));
      obj.files = obj.files.filter((item) => item?.url !== url);
      localStorage.setItem("user", JSON.stringify(obj));

      // 4. Update profile files in Firestore
      const userRef = doc(fireDB, "user", docId);
      await updateDoc(userRef, { files: obj.files });

      toast.success("File deleted successfully");
    } catch (error) {
      console.error("Error deleting file:", error);
      toast.error("Failed to delete file");
    }
  };

  const categorizeFileType = (url) => {
    const fileName = url.substring(url.lastIndexOf("/") + 1);
    const fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();

    const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
    const videoExtensions = ["mp4", "avi", "mkv", "mov", "wmv", "flv", "webm"];

    if (imageExtensions.includes(fileExtension)) {
      return "image";
    }

    if (videoExtensions.includes(fileExtension)) {
      return "video";
    }

    return "file";
  };

  useEffect(() => {
    if (url) {
      setType(categorizeFileType(url));
    }
  }, [url]);

  return (
    <div
      style={{ cursor: "pointer" }}
      className="border-[#A56DC1] border-2 w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded-lg relative transition-all shadow-2xl hover:scale-105 bg-white"
    >
      <img
        className="h-[60%] flex m-auto object-cover"
        src={type === "image" ? url : type === "video" ? videoIcon : fileIcon}
        alt=""
      />
      <div className="bg-violet-50">
        <h2 className="text-ellipsis line-clamp-1 my-1 pl-2">{name}</h2>
        <div className="flex items-center justify-between my-1-2 pl-2">
          <p className="text-sm text-neutral-400">{owner}</p>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-[#A56DC1] m-2 py-2 w-[90%] rounded-lg text-white font-bold"
            onClick={handleDownload}
          >
            Open
          </button>
          {isMyProfile && (
            <button
              className="bg-red-500 m-2 py-2 w-[90%] rounded-lg text-white font-bold"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

 