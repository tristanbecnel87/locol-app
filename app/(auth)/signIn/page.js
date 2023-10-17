"use client";
import React, { useEffect, useState } from "react";
import { Authenticator, useAuthenticator, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { Auth } from "aws-amplify";
import { Amplify } from "aws-amplify";
import config from "app/aws-exports";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/components/Context";
import { Router } from "next/router";
Amplify.configure(config);


const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSignIn = async () => {
    console.log(`Email: ${email}, Password: ${password}`);
    console.log("current user type: " + userType);
    try {
      const user = await Auth.signIn(email, password);
      console.log("User signed in", user.attributes.email);
      router.push("/dashboard");
    } catch (error) {
      console.log("Error signing in", error);
    }
  };

  const handleBackArrow = () => {
    console.log("Back Arrow Clicked");
    router.push("/dashboard");
  }

  const switchUserType = () => {
    if (userType === 'student') {
      setUserType('business');
    } else {
      setUserType('student');
    }
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center m-0 p-0 bg-orange-100">
      <div className="w-[800px] h-[500px] min-h-min min-w-min bg-stone-50 p-6 rounded-3xl shadow-lg flex flex-col justify-evenly">
        <div>
          <div className="text-center">
            <h1 className=" text-xl text-sky-900 font-bold">Welcome back!</h1>
          </div>
          <div className="px-4">
            <div className=" cursor-pointer h-4 w-4 hover:scale-125 transition" onClick={handleBackArrow}>
              <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Back-Arrow" d="M7.07 1L1 7.07L7.07 13.14M18 7.07H1.17" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="text-center">
            <h1 className=" text-4xl text-sky-900 font-bold">Sign in</h1>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div className="px-4 scale-125">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <g clip-path="url(#clip0_810_10963)">
                <path d="M11.1272 3.11598C11.1272 1.43995 9.76851 0.0812988 8.09249 0.0812988C6.41646 0.0812988 5.0578 1.43995 5.0578 3.11598C5.0578 4.79201 6.41646 6.15066 8.09249 6.15066C9.76851 6.15066 11.1272 4.79201 11.1272 3.11598ZM7.38408 7.70278C5.50858 6.55466 2.47074 6.23917 0.942016 6.15224C0.428333 6.12316 0 6.51451 0 7.00859V14.0516C0 14.5046 0.366375 14.8823 0.837383 14.9067C2.21753 14.9791 5.00975 15.2443 6.93962 16.2163C7.23582 16.3655 7.58702 16.1623 7.58702 15.8411V8.06504C7.5867 7.91742 7.51368 7.78212 7.38408 7.70278ZM15.243 6.15224C13.7146 6.23886 10.6764 6.55466 8.80121 7.70278C8.6716 7.78212 8.59858 7.92279 8.59858 8.07042V15.8401C8.59858 16.1623 8.95073 16.3658 9.24788 16.2163C11.1774 15.2452 13.9681 14.98 15.3479 14.9076C15.8189 14.883 16.1853 14.5052 16.1853 14.0522V7.00859C16.185 6.51451 15.7566 6.12316 15.243 6.15224Z" fill="#00416B"/>
              </g>
              <defs>
                <clipPath id="clip0_810_10963">
                  <rect width="16.185" height="16.185" fill="white" transform="translate(0 0.0812988)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <input type="checkbox" id="business-or-student" class="relative shrink-0 w-[3.25rem] h-7
           bg-sky-900 rounded-full cursor-pointer transition-colors ease-in-out duration-200 
           border border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none 
           appearance-none before:inline-block before:w-6 before:h-6
           before:bg-blue-200 checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full 
           before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 " onClick={switchUserType} />
          <div className="px-4 scale-125">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
              <path d="M12.6781 15.4805H12.1414V1.28985C12.1414 0.877353 11.853 0.542969 11.4973 0.542969H2.47994C2.12421 0.542969 1.83585 0.877353 1.83585 1.28985V15.4805H1.2991C1.12125 15.4805 0.977051 15.6477 0.977051 15.854V16.4764H13.0002V15.854C13.0002 15.6477 12.856 15.4805 12.6781 15.4805ZM4.41223 2.90808C4.41223 2.70185 4.55643 2.53464 4.73428 2.53464H5.80777C5.98562 2.53464 6.12982 2.70185 6.12982 2.90808V4.15288C6.12982 4.35911 5.98562 4.52632 5.80777 4.52632H4.73428C4.55643 4.52632 4.41223 4.35911 4.41223 4.15288V2.90808ZM4.41223 5.8956C4.41223 5.68937 4.55643 5.52216 4.73428 5.52216H5.80777C5.98562 5.52216 6.12982 5.68937 6.12982 5.8956V7.1404C6.12982 7.34663 5.98562 7.51384 5.80777 7.51384H4.73428C4.55643 7.51384 4.41223 7.34663 4.41223 7.1404V5.8956ZM5.80777 10.5013H4.73428C4.55643 10.5013 4.41223 10.3341 4.41223 10.1279V8.88311C4.41223 8.67688 4.55643 8.50967 4.73428 8.50967H5.80777C5.98562 8.50967 6.12982 8.67688 6.12982 8.88311V10.1279C6.12982 10.3341 5.98562 10.5013 5.80777 10.5013ZM7.84741 15.4805H6.12982V12.8665C6.12982 12.6602 6.27401 12.493 6.45187 12.493H7.52536C7.70321 12.493 7.84741 12.6602 7.84741 12.8665V15.4805ZM9.56499 10.1279C9.56499 10.3341 9.4208 10.5013 9.24295 10.5013H8.16945C7.9916 10.5013 7.84741 10.3341 7.84741 10.1279V8.88311C7.84741 8.67688 7.9916 8.50967 8.16945 8.50967H9.24295C9.4208 8.50967 9.56499 8.67688 9.56499 8.88311V10.1279ZM9.56499 7.1404C9.56499 7.34663 9.4208 7.51384 9.24295 7.51384H8.16945C7.9916 7.51384 7.84741 7.34663 7.84741 7.1404V5.8956C7.84741 5.68937 7.9916 5.52216 8.16945 5.52216H9.24295C9.4208 5.52216 9.56499 5.68937 9.56499 5.8956V7.1404ZM9.56499 4.15288C9.56499 4.35911 9.4208 4.52632 9.24295 4.52632H8.16945C7.9916 4.52632 7.84741 4.35911 7.84741 4.15288V2.90808C7.84741 2.70185 7.9916 2.53464 8.16945 2.53464H9.24295C9.4208 2.53464 9.56499 2.70185 9.56499 2.90808V4.15288Z" fill="#00416B"/>
            </svg>
          </div>
        </div>
        <div className="mb-4 mx-20">
          <label for="input-label" class="block text-sm font-semibold mb-2 text-black dark:text-white">Email:</label>
          <input type="email" id="input-label" class="py-3 px-4 block w-full border-gray-500  ring-neutral-500 rounded-full 
            text-sm shadow-lg" 
            value={email} onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="mb-6 mx-20">
          <label for="input-label" class="block text-sm font-semibold mb-2 text-black dark:text-white">Password:</label>
          <input type={showPassword ? "text" : "password"} id="input-label" class="py-3 px-4 block w-full border-gray-200 rounded-full 
            text-sm ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 shadow-lg" 
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
