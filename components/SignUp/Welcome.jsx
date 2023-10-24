"use client";
import React, {useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

const Welcome = ({setUserType, setScreen}) => {
  const router = useRouter();

  const setStudent = () => {
    setUserType("student");
    setScreen("PG_STUDENT_EDUCATION");
  }

  const setBusiness = () => {
    setUserType("business");
    setScreen("PG_BUSINESS_BASICINFO");
  }

  return (
    <div className="w-[800px] min-h-min min-w-min bg-stone-50 p-6 rounded-3xl shadow-lg flex flex-col justify-evenly ">
        <div className="flex justify-between items-center mt-4">
            <div className="px-4">
                <div className=" cursor-pointer h-4 w-4 hover:scale-125 transition" onClick={() => router.push("/")}>
                <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Back-Arrow" d="M7.07 1L1 7.07L7.07 13.14M18 7.07H1.17" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
            </div>
            <div className="text-center font-bold">
                <h1 className=" text-4xl text-rawSienna-500 font-bold">Welcome to Locol!</h1>
            </div>
            <div className="px-4"/>
        </div>
        <div className="text-center pb-4">
            <p className="text-md text-rawSienna-500 font-medium">Sign up to Join the Movement</p>
        </div>
        <div className="px-32 pt-4">
            <h1 className="font-bold text-neutral-800 text-xl">Who are you?</h1>
            <div class=" my-4 py-2 px-4 block w-full border border-stone-300 rounded-full text-sm shadow-lg cursor-pointer hover:bg-slate-100 transition" onClick={setStudent}>
                <h2 className="text-neutral-800 text-lg font-medium pl-5">Student</h2>
            </div>
            <div class=" my-4 py-2 px-4 block w-full border border-stone-300 rounded-full text-sm shadow-lg cursor-pointer hover:bg-slate-100 transition" onClick={setBusiness}>
                <h2 className="text-neutral-800k text-lg font-medium pl-5">Business</h2>
            </div>
        </div>
        <p className="pt-4 text-gray-400 text-center pb-5">
            Already have an account? <Link className=" text-rawSienna-500"  href="/signIn">Sign in</Link> instead.
        </p>
    </div>
  );
};

export default Welcome;
