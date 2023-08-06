import React from "react";
import LoginImage from '../assets/LoginImage.jpg'
export default function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block  flex-col justify-center">
            <img className="w-full h-full object-cover " src={LoginImage} alt="" />
        </div>

        <div className="bg-gray-800 flex flex-col justify-center">
            <form className="max-w-[400px] w-full mx-auto bg-gray-900p-8 px-8 rounded-lg">
                <h2 className="text-4xl dark:text-white font-bold text-center">Sign In</h2>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Email</label>  
                    <input className ="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800"type="email" />
                 </div>
                 <div className="flex flex-col text-gray-400 py-2">
                    <label>Password</label>  
                    <input className ="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800"type="password"/>
                 </div>
                 <div className="flex justify-between text-gray-400 py-3">
                    <p className="flex items-center"><input className="mr-2" type="checkbox" />Remember Me</p>
                    
                 </div>
                 <button className="w-full my-5 py-2 bg-teal-500 rounded-xl shadow-lg shadow-teal-500/50">Sign In</button>
            </form>
        </div>

    </div>
  );
}
