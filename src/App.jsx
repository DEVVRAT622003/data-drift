import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <div className='mb-14 md:mb-0'>
      <Footer/>
      </div>
    </div>
  )
}

export default App
