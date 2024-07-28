import React from 'react'
import banner1 from '../../public/assets/banner1.png'
import img from '../../public/assets/img.png'
import banner2 from '../../public/assets/banner2.jpg'
import bannerImage from '../../public/assets/banner-image.jpg'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserProvider'
import { useContext } from 'react'


const Banner = () => {

  const navigate = useNavigate();
  const {isLoggedIn} = useContext(UserContext);

  const handleUploadClick = ()=>{
    if(isLoggedIn){
      navigate('/upload')
    }else{
      navigate('/login')
    }
  }

  return (
    <div className='w-full h-[100vh] text-black absolute top-0 left-0' style={{backgroundImage:`url(${bannerImage})` , backgroundPosition:'center' , backgroundSize:'cover' , backgroundRepeat:'no-repeat'}}  >   
        {/* <div className='w-full h-full absolute top-0 left-0 z-20 bg-gradient-to-r from-blue-100 to-transparent'>

        </div> */}
      
        <div className='h-full w-[100vw] md:w-[60vw] lg:w-[40vw] flex gap-7 flex-col justify-center pl-10 items-start'>
            <h1 className='text-2xl lg:leading-tight lg:text-[45px] font-bold text-[#A56DC1]'>Empower Your File Sharing Experience with DataDrift</h1>
            <h1 className='pr-10 text-sm lg:text-lg text-gray-600'>Share files seamlessly and connect with others effortlessly with DataDrift, a platform designed for swift and secure data transfer. Our platform is designed to simplify the process of sharing files through easily generated links, ensuring compatibility with a wide range of file formats and offering an intuitive user-friendly experience.</h1>
            <button className='bg-[#A56DC1] text-white px-5 py-2 rounded-full text-xl hover:scale-105 hover:text-[#A56DC1] hover:bg-white border-[#A56DC1] hover:border-2 font-extrabold' onClick={()=> handleUploadClick()}>Upload Now</button>
        </div>
      
    </div>
  )
}

export default Banner
