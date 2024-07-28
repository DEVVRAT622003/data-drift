import { IoSearch } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { collection, query, orderBy, limit, getDocs ,where } from "firebase/firestore";
import { fireDB } from "../Firebase/fireConfig";
import Container from "./Container";

const Search = () => {
  const [input, setInput] = useState("");
  const [trendingData, settrendingData] = useState([]);
  const [searchedData , setSearchedData] = useState([]);
  const [filesData, setFilesData] = useState([]);


  // Get trending data
  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        const q = query(
          collection(fireDB, "files"),
          orderBy("uploadedAt", "desc"),
          limit(6)
        ); // Limit to top 6 documents ordered by 'uploadedAt' descending
        const querySnapshot = await getDocs(q);
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        settrendingData(documents);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchTrendingData();
  }, []);

  // Get the complete files collection
  useEffect(() => {
    const fetchFilesData = async () => {
      try {
        const querySnapshot = await getDocs(collection(fireDB, "files"));
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFilesData(documents);
      } catch (error) {
        console.error("Error fetching files data: ", error);
      }
    };

    fetchFilesData();

  }, []);

  useEffect(()=>{
    const findSearchedData = () => {
      const inp = input.trim().toLowerCase(); 
      const filteredData = filesData.filter((data) => {
        const toFind = data.name.trim().toLowerCase(); 
        return toFind.includes(inp);
      });
      setSearchedData(filteredData); 
    };

    findSearchedData();

  },[input])

  

  console.log(searchedData);
  console.log(filesData);

  return (
    <div className="w-full  bg-[#E3E6E6] border-white border-t-2 mt-[100vh] flex flex-col gap-10 pb-3">
      {/* Show search bar  */}
      <div className="flex items-center justify-center">
      <div className="flex justify-center items-center mt-6 h-full w-[50%] rounded-full overflow-hidden pr-2 bg-white">
        <input
        onChange={(e)=> setInput(e.target.value)}
          type="text"
          className="h-full w-full py-3 pl-4 outline-none"
          placeholder="Search here"
        />
        <IoSearch size={30} className="cursor-pointer" color="purple" />
      </div>
      </div>
      {/* Show trending files  */}
      {
        input == ''
        ?
      <div className="">
        <h1 className="text-center pb-4 text-lg lg:text-xl font-bold"> Trending Files ...</h1>
        <Container files={trendingData} />
      </div>
        :
        searchedData.length == 0 
        ?
        <h1 className="text-center pb-4 text-lg lg:text-xl font-bold"> No result found ... </h1>
        :
      <div className="">
        <h1 className="text-center pb-4 text-lg lg:text-xl font-bold"> Trending Files ...</h1>
        <Container files={searchedData} />
      </div>

      }
      
    </div>
  );
};

export default Search
