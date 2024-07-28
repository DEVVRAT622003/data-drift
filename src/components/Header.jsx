import React, { useContext } from 'react'
import logo from '../../public/assets/logo.png'
import banner3 from '../../public/assets/banner3.png'
import { UserContext } from '../Context/UserProvider'
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Header = () => {
  const {isLoggedIn , setIsLoggedIn , currentUser} = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("docId");
    setIsLoggedIn(false);
    navigate('/');
    toast.success("User Logged Out")
  }

  return (
    <div className='fixed top-0 h-16 w-full bg-white  z-40 flex flex-col sm:flex-row justify-between shadow-md items-center'>
      <div className='h-full flex justify-start ' onClick={()=>navigate('/')}>
        <img src={logo} className='h-[100%] sm:h-full pl-9 cursor-pointer' />
      </div>
      <div className='z-40 lg:pr-6 hidden md:flex '>
      {
          isLoggedIn ?
          (
            <div className='flex gap-6 items-center justify-between'>
              <button className='bg-white text-[#A56DC1] font-bold px-6 py-2 rounded-full border-[#A56DC1] border-2 hover:scale-110 hover:bg-[#A56DC1] hover:text-white hover:border-white hover:border-2' onClick={()=> handleLogout()}>Logout</button>
              <FaUserCircle size={35} 
              onClick={()=> navigate(`/profile/${currentUser.uid}`)}
              color='#A56DC1' className='active:scale-90 hover:scale-105 cursor-pointer' />
            </div>
          )
          :
          (
            <div className='flex gap-4'>
              <button className='bg-white text-[#A56DC1] font-bold px-6 py-2 rounded-full border-[#A56DC1] border-2 hover:scale-110 hover:bg-[#A56DC1] hover:text-white hover:border-white hover:border-2' onClick={()=> navigate('/login')}>Login</button>
              <button className='bg-white text-[#A56DC1] font-bold px-6 py-2 rounded-full border-[#A56DC1] border-2 hover:scale-110 hover:bg-[#A56DC1] hover:text-white hover:border-white hover:border-2 'onClick={()=> navigate('/register')}>Signin</button>
            </div>
          )
        }
      </div>

        {/* Bottom nav bar  */}
      <div className='z-40 lg:pr-6 flex md:hidden fixed bottom-0 h-14 w-full '>
      {
          isLoggedIn ?
          (
            <div  className='flex justify-around items-center gap-4 w-full h-full bg-white'>
              <button className='h-[70%] bg-white text-[#A56DC1] font-bold px-6 py-2 rounded-full border-[#A56DC1] border-2 hover:scale-110 hover:bg-[#A56DC1] hover:text-white hover:border-white hover:border-2' onClick={()=> handleLogout()}>Logout</button>
              <FaUserCircle size={35} 
              onClick={()=> navigate(`/profile/${currentUser.uid}`)}
              color='#A56DC1' className='active:scale-90 hover:scale-105 cursor-pointer' />
            </div>
          )
          :
          (
            <div className='flex justify-around items-center gap-4 w-full h-full bg-white'>
              <button className='h-[70%] bg-white text-[#A56DC1] font-bold px-6 py-2 rounded-full border-[#A56DC1] border-2 hover:scale-110 hover:bg-[#A56DC1] hover:text-white hover:border-white hover:border-2' onClick={()=> navigate('/login')}>Login</button>
              <button className=' h-[70%] bg-white text-[#A56DC1] font-bold px-6 py-2 rounded-full border-[#A56DC1] border-2 hover:scale-110 hover:bg-[#A56DC1] hover:text-white hover:border-white hover:border-2 'onClick={()=> navigate('/register')}>Signin</button>
            </div>
          )
        }
      </div>
        
    </div>
  );
}

export default Header
