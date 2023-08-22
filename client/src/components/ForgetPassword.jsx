// import { useState } from "react";
import "../App.css";
import "./style.css";
import {Link} from 'react-router-dom';


export default function ForgetPassword() {
  return (
    <>
    
    <div className="mx-auto ">
      <div className="bg-white text-indigo-700 font-lobster text-2xl  ml-5 p-3 flex-col">
        <Link to="/">  
        <h1>Inventory System</h1>
        </Link>
      
      </div>
      <div className="flex justify-center items-center h-screen bg-indigo-600 font-abel">
     
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center font-semibold"><i className="fa-solid fa-user"></i> Forget Password</h1>
          
          <div className="mt-3">
              <label htmlFor="email" className="block text-base mb-2">Email</label>
              <input type="email" id="email" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Email..." />
          </div>
          
          
          <div className="mt-5">
            <Link to='/home'><button type="submit" className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Retrieve Password</button></Link>
           
          </div>
          <div className="mt-3 flex justify-end">
             
             <div>
               <p>Go Back & <Link to="/" className="text-indigo-800 font-semibold">LogIn</Link></p>
             </div>
         </div>
        </div>
      </div>
    </div>
    </>
  );
}
