import React, { useContext, useEffect } from "react";
import Upload from "../components/Upload";
import { UserContext } from "../Context/UserProvider";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Testimonial from "../components/Testimonial";

const Home = () => {

  
  return (
    <div>
      <Banner/>
      <Search/>
      {/* <Upload/> */}
      <Testimonial/>
    </div>
  );
};

export default Home;
