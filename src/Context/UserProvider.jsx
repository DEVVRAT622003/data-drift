import { storage } from "../Firebase/fireConfig";
import React, { createContext, useEffect, useState } from "react";
import {ref, uploadBytes, getDownloadURL, listAll, list} from "firebase/storage";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));
  const [loading, setLoading] = useState(true);
  const [docId , setDocId] = useState('');

  const getUserCredentials = ()=>{
    setCurrentUser(JSON.parse(localStorage.getItem("user")) || {});
  }

  const getDocId = ()=>{
    setDocId(JSON.parse(localStorage.getItem("docId")));
  }

  useEffect(()=>{
    getUserCredentials();
    getDocId();
  },[isLoggedIn]);


  const value = {
    docId,
    setDocId,
    currentUser,
    isLoggedIn,
    setIsLoggedIn,
    loading,
   setCurrentUser
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
