"use client";
import React, { useEffect, useState } from "react";
import { Authenticator, useAuthenticator, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { Auth } from "aws-amplify";
import { Amplify } from "aws-amplify";
import config from "app/aws-exports";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/components/Context";
Amplify.configure(config);


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSignIn = () => {
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const handleBackArrow = () => {
    console.log("Back Arrow Clicked");
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center m-0 p-0 bg-orange-100">
      <div className="w-1/3 h-1/2 bg-stone-50 p-6 rounded-3xl shadow-lg flex flex-col justify-evenly">
        <div className=" flex-row">
          <div className=" cursor-pointer h-4 w-4" onClick={handleBackArrow}>
            <svg class="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div className="text-center">
            <h1 className=" text-xl text-sky-900 font-bold">Welcome back!</h1>
          </div>
        </div>
        <div className="text-center">
          <h1 className=" text-4xl text-sky-900 font-bold">Sign in</h1>
        </div>
        <div class="flex items-center justify-center">
          <label class="text-sm text-gray-500 mr-3 dark:text-gray-400">busi</label>
          <input type="checkbox" id="business-or-student" class="relative shrink-0 w-[3.25rem] h-7 bg-gray-100
           checked:bg-sky-900 rounded-full cursor-pointer transition-colors ease-in-out duration-200 
           border border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none 
           appearance-none dark:bg-gray-700 dark:checked:bg-sky-900 dark:focus:ring-offset-gray-800 before:inline-block before:w-6 before:h-6
           before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full 
           before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200" />
          <label class="text-sm text-gray-500 ml-3 dark:text-gray-400">scho</label>
        </div>
        <div className="mb-4 mx-20">
          <label for="input-label" class="block text-sm font-semibold mb-2 text-black dark:text-white">Email:</label>
          <input type="email" id="input-label" class="py-3 px-4 block w-full border-gray-500  ring-neutral-500 rounded-full 
            text-sm shadow-md" 
            value={email} onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="mb-6 mx-20">
          <label for="input-label" class="block text-sm font-semibold mb-2 text-black dark:text-white">Password:</label>
          <input type={showPassword ? "text" : "password"} id="input-label" class="py-3 px-4 block w-full border-gray-200 rounded-full 
            text-sm ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 shadow-md" 
            value={password} onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div className="text-center">
          <button
            className="bg-sky-900 text-white rounded-full py-2 px-4 hover:bg-sky-700 transition duration-300"
            onClick={handleSignIn}
          >
            <p className=" mx-8 font-semibold">Login</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
