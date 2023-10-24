"use client";
import React, {useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

const CreateStudentAccount = ({setScreen}) => {
    
  return (
    <div className="w-[800px] min-h-min min-w-min bg-stone-50 p-6 rounded-3xl shadow-lg flex flex-col justify-evenly ">
        <div className="flex justify-between items-center mt-4">
            <div className="px-4">
                <div className=" cursor-pointer h-4 w-4 hover:scale-125 transition" onClick={() => setScreen("PG_STUDENT_ABOUTYOU")}>
                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.07 1L1 7.07L7.07 13.14M18 7.07H1.17" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className="text-center font-bold">
                <h1 className=" text-4xl text-neutral-800 font-bold">Create your student account</h1>
            </div>
            <div className="px-4" />
        </div>
    </div>
  );
};

export default CreateStudentAccount;
