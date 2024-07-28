import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 min-h-screen mt-16">
      <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 underline text-center">Our Team</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col max-w-full">
          <h3 className="text-sm lg:text-lg font-semibold mb-2">Arushi Karal</h3>
          <p className="text-gray-600 mb-2">Email: arushikaral@gmail.com</p>
          <a href="https://www.linkedin.com/in/arushi-karal2002" className="text-blue-500">LinkedIn</a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col max-w-full">
          <h3 className="text-sm lg:text-lg font-semibold mb-2">Muskan Damani</h3>
          <p className="text-gray-600 mb-2">Email: muskandamani440@gmail.com</p>
          <a href="https://www.linkedin.com/in/muskan-damani-9ab82a24b" className="text-blue-500">LinkedIn</a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col max-w-full">
          <h3 className="text-sm lg:text-lg font-semibold mb-2">Divyanshi Pareta</h3>
          <p className="text-gray-600 mb-2">Email: divyanshipareta@gmail.com</p>
          <a href="https://www.linkedin.com/in/divyanshi-pareta-343781249" className="text-blue-500">LinkedIn</a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col max-w-full">
          <h3 className="text-sm lg:text-lg font-semibold mb-2">Geetanjali Vyas</h3>
          <p className="text-gray-600 mb-2">Email: geetanjali.vyas02@gmail.com</p>
          <a href="https://www.linkedin.com/in/geetanjali02" className="text-blue-500">LinkedIn</a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col max-w-full">
          <h3 className="text-sm lg:text-lg font-semibold mb-2">Devvrat Singh Rathore</h3>
          <p className="text-gray-600 mb-2">Email: devvratsingh622003@gmail.com</p>
          <a href="https://www.linkedin.com/in/devvrat-singh-rathore-498726221/" className="text-blue-500">LinkedIn</a>
        </div>
      </div>
    </div>
  );
   
}

export default Contact
