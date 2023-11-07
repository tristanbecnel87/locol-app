"use client";
import React, {useEffect, useState } from "react";

import Link from "next/link";
import InputPill from "@/components/InputPill";

const CreateStudentAccount = ({setScreen, setForm, form, signUp}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const updateForm = () => {
        setForm({
            ...form,    
            email: email,
            password: password,
        });
    }

    useEffect(() => {
        updateForm();
    }, [email, password, confirmPassword])

    const handleBack = () => {
        updateForm();
        setScreen("PG_STUDENT_ABOUTYOU");
    }

    const handleSubmit = () => {
        updateForm();
        if(password === confirmPassword) {
            signUp();
        }
    }


  return (
    <div className="w-[800px] min-h-min min-w-min bg-stone-50 p-6 rounded-3xl shadow-lg flex flex-col justify-evenly ">
        <div className="flex justify-between items-center mt-4">
            <div className="px-4">
                <div className=" cursor-pointer h-4 w-4 hover:scale-125 transition" onClick={handleBack}>
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
        <div className="px-32 pt-4 w-full flex flex-col justify-start">
            <div className="mt-4 mb-1">
                <label className="block text-lg font-semibold mb-2 text-black dark:text-white">Email</label>
                <input type="email" className="py-3 px-4 block w-full border border-stone-300 rounded-full text-sm shadow-lg" 
                    onChange={(e) => setEmail(e.target.value)}  
                />
                <h3 className=" text-gray-500 text-xs pl-5 pt-2">*Must be current school email ending with ".edu"</h3>
            </div>
            <InputPill title="Password" placeholder="" setState={setPassword} inputType="password" />
            <InputPill title="Confirm Password" placeholder="" setState={setConfirmPassword} inputType="password" />
        </div>
        
        <div className=" flex pt-8 flex-col justify-center items-center">
            <button
                className="bg-rawSienna-500 text-white rounded-full py-2 px-4 hover:bg-sky-700 transition duration-300"
                onClick={handleSubmit}
            >
                <h2 className=" mx-8 font-semibold">Create Account</h2>
            </button>
            <p className="pt-4 text-gray-400 text-center pb-5">
                Already have an account? <Link className=" text-rawSienna-500"  href="/signIn">Sign in</Link> instead.
            </p>
        </div>
    </div>
  );
};

export default CreateStudentAccount;
