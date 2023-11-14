"use client";
import React, {useState, useEffect} from "react";

import Link from "next/link";
import InputPill from "@/components/InputPill";
import ConfirmSignUpModal from "../ConfirmSignUpModal";

const CreateBusinessAccount = ({setScreen, setForm, form, signUp, confirm}) => {
    
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");  

    const updateForm = () => {
        setForm({
            ...form,    
            email: email,
            password: password,
            fullName: fullName,
        });
    }

    useEffect(() => {
        import('preline');
    }, [])

    useEffect(() => {
        updateForm();
    }, [email, password, confirmPassword, fullName])

    const handleBack = () => {
        updateForm();
        setScreen("PG_BUSINESS_SERVICES");
    }

    const handleSubmit = () => {
        updateForm();
        if(password === confirmPassword) {
            signUp();
        } // TODO: otherwise error toast message?
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
                <h1 className=" text-4xl text-neutral-800 font-bold">Create your business account</h1>
            </div>
            <div className="px-4" />
        </div>
        <div className="px-32 pt-4 w-full flex flex-col justify-start">
            <InputPill title="Full Name" placeholder="" setState={setFullName} inputType="text" />
            <div className="mt-4 mb-1">
                <label className="block text-lg font-semibold mb-2 text-black dark:text-white">Email</label>
                <input type="email" className="py-3 px-4 block w-full border border-stone-300 rounded-full text-sm shadow-lg" 
                    onChange={(e) => setEmail(e.target.value)}  
                />
                <h3 className=" text-gray-500 text-xs pl-5 pt-2">*Must be current business email</h3>
            </div>
            <InputPill title="Password" placeholder="" setState={setPassword} inputType="password" />
            <InputPill title="Confirm Password" placeholder="" setState={setConfirmPassword} inputType="password" />
        </div>
        
        <div className=" flex pt-8 flex-col justify-center items-center">

            <button
                className="bg-sky-900 text-white rounded-full py-2 px-4 hover:bg-sky-700 transition duration-300"
                data-hs-overlay="#hs-vertically-centered-modal"
                onClick={handleSubmit}
            >
                <h2 className=" mx-8 font-semibold">Create Account</h2>
            </button>
            <ConfirmSignUpModal username={email} password={password} confirm={confirm} />
            
            <p className="pt-4 text-gray-400 text-center">
                Already have an account? <Link className=" text-rawSienna-500"  href="/signIn">Sign in</Link> instead.
            </p>
            <p className="pt-1 text-gray-400 text-center pb-5">
                Have a confirmation code? Enter it <button className="text-rawSienna-500" data-hs-overlay="#hs-vertically-centered-modal"> here</button>.
            </p>
        </div>
    </div>
  );
};

export default CreateBusinessAccount;
