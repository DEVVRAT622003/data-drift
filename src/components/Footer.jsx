import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../public/assets/footer-logo.png'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-slate-800 h-[200px] flex items-center justify-center gap-[20vw]'>
      <div>
        <img src={logo} className='w-[200px] lg:w-[300px]'/>
      </div>
      <div className='text-gray-300 text-lg'>
        <p className='hover:cursor-pointer hover:text-white text-xs mb-3 lg:text-lg' onClick={()=> navigate('/about')}>About Us</p>
        <p className='hover:cursor-pointer hover:text-white text-xs lg:text-lg' onClick={()=> navigate('/contact')}>Our Team</p>
      </div>
    </div>
  )
}

export default Footer
