import React, { useState, useEffect } from "react";
import bg from "../../public/assets/profile-image.jpg";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../components/Container";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import user from "../../public/assets/user.png";
import { fireDB } from "../Firebase/fireConfig";

const Profile = () => {
  const { uid } = useParams();
  const [userData, setUserData] = useState(null);
  const [isMyProfile , setIsMyProfile] = useState(null);

  useEffect(()=>{
    const myProfile = ()=>{
      const id = JSON.parse(localStorage.getItem("user"))?.uid;
      if(!id){
        setIsMyProfile(false)
        return;
      }else if(id==uid){
        setIsMyProfile(true);
        return
      }else{
        setIsMyProfile(false);
      }
      
    }

    myProfile();
    
  },[]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const q = query(collection(fireDB, "user"), where("uid", "==", uid));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setUserData(doc.data());
          });
        });

        return unsubscribe;
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [uid]); // Add uid to dependencies to re-run effect when uid changes
  // console.log(userData);
  console.log(isMyProfile);

  if (!userData) {
    return;
  }
  const { name, email, files } = userData;

  return (
    <div className="relative bg-[#E3E6E6] pb-10">
      <div className="mb-9">
        <div
          className="w-full h-[350px] absolute"
          style={{
            backgroundImage: `url(https://img.freepik.com/premium-photo/professional-slides-template-background-illustration-powerpoint-presentation_732449-3250.jpg)`,
          }}
        ></div>
        <div className="w-full min-h-max flex flex-col pt-[220px]">
          <h3 className="w-full text-center font-bold text-lg lg:text-2xl z-30 ">
            Profile
          </h3>
          <img
            className="w-[170px] mx-auto z-30"
            src={user}
            alt="profile-image"
          />
          <span className="text-center text-sm md:text-lg">
            <span className="font-bold">Name : </span>
            {name}
          </span>
          <span className="text-center text-sm md:text-lg">
            <span className="font-bold">Email : </span>
            {email}
          </span>
        </div>
      </div>
      <div className="">
        {files.length == 0 ? (
          <h1 className="text-center text-lg py-5 font-bold">
            No Files Available !!
          </h1>
        ) : (
          <div>
            <h1 className="text-center text-lg py-5 font-bold">
              My Uploads ...
            </h1>
            <Container files={files} isMyProfile={isMyProfile}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
