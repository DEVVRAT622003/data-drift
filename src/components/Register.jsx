import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {auth , app , googleProvider , fireDB} from '../Firebase/fireConfig'
import { createUserWithEmailAndPassword , signInWithPopup} from 'firebase/auth';
import { addDoc, collection, Timestamp } from 'firebase/firestore';

const Register = () => {
    const [email , setEmail] = useState('');
    const [pass , setPass] = useState('');
    const navigate = useNavigate();

    // Registration using email Id and passward
    const handleEmailRegistration = async () => {
        if(email === '' || pass === '') {
            toast.error("Invalid Email or Password");
            
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
            console.log(userCredential);
            const user = {
                name : userCredential.user.displayName ,
                email : userCredential.user.email , 
                uid : userCredential.user.uid ,
                time: Timestamp.now(),
                files:[],
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }
            // Create user refernce
            const userRef = collection(fireDB , 'user');
            // Add user details 
            await addDoc(userRef , user);

            setEmail('');
            setPass('');

            toast.success('Registered');
            navigate('/login');

        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    }
    

    // Registration using google account
    const handleGoogleRegistration = async () => {
        try {
            const userCredential = await signInWithPopup(auth , googleProvider);
            console.log(userCredential);
            const user = {
                name : userCredential.user.displayName ,
                email : userCredential.user.email , 
                uid : userCredential.user.uid ,
                time: Timestamp.now(),
                files:[],
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }
            // create user Refernce
            const userReference = collection(fireDB , "user");
            // Add User Details
            await addDoc(userReference, user);
            toast.success('Registered');

            navigate('/login');
            
        } catch (error) {
            console.error('Error signing up:', error.message);
            
        }

        
    }

    return (
        <div className="flex justify-center items-center h-screen bg-purple-50">
          <div className="bg-white px-10 py-10 rounded-xl">
            <div>
              <h1 className="text-center text-purple-800 text-xl mb-4 font-bold">
                Signup
              </h1>
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="bg-gray-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg placeholder-gray-600 outline-none"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="password"
                className="bg-gray-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg placeholder-gray-600 outline-none"
                placeholder="Password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center mb-3 flex-col gap-2">
              <button
                className="bg-purple-500 w-full text-white font-bold px-2 py-2 rounded-lg"
                onClick={handleEmailRegistration}
              >
                Signup with Email
              </button>
      
              <button
                className="bg-purple-500 w-full text-white font-bold px-2 py-2 rounded-lg"
                onClick={handleGoogleRegistration}
              >
                Signup with Google
              </button>
            </div>
            <div className="flex gap-3">
              <h2 className="text-purple-800">Already have an account </h2>
              <h2
                className="cursor-pointer text-purple-500  font-bold"
                onClick={() => navigate("/login")}
              >
                Login
              </h2>
            </div>
          </div>
        </div>
      );
      

//   return (
//     <div className=' flex justify-center items-center h-screen'>
//     <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
//         <div className="">
//             <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
//         </div>
//         <div>
//             <input type="email"
//                 name='email'
//                 className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
//                 placeholder='Email'
//                 onChange={(e)=>{setEmail(e.target.value)}}
//             />
//         </div>
//         <div>
//             <input
//                 type="password"
//                 className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
//                 placeholder='Password'
//                 onChange={(e)=>{setPass(e.target.value)}}
//             />
//         </div>
//         <div className=' flex justify-center mb-3 flex-col gap-2'>
//             <button
//                 className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'
//                 onClick={handleEmailRegistration}>
//                 Signup with Email
//             </button>
            
//             <button
//                 className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'
//                 onClick={handleGoogleRegistration}>
//                 Signup with Google
//             </button>
//         </div>
//         <div className='flex gap-3'>
//             <h2 className='text-white'>Already have an account </h2><h2 className='cursor-pointer text-red-500 font-bold' onClick={()=> navigate('/login')}>Login</h2>
//         </div>
//     </div>
// </div>
// )
  
}

export default Register
