"use client";
import React, {useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import InputPill from "@/components/InputPill";

const BasicInfo = ({setScreen, setForm, form}) => {

    const [officeLocation, setOfficeLocation] = useState("");
    const [industry, setIndustry] = useState("");
    const [companyFounded, setCompanyFounded] = useState("");

    const updateForm = () => {
        setForm({
            ...form,
            officeLocation: officeLocation,
            industry: industry,
            companyFounded: companyFounded
        });
    }

    const handleBack = () => {
        updateForm();
        setScreen("PG_WELCOME");
    }

    const handleForward = () => {
        updateForm();
        setScreen("PG_BUSINESS_SERVICES");
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
                <h1 className=" text-4xl text-neutral-800 font-bold">Basic Info</h1>
            </div>
            <div className="px-4">
                <div className=" cursor-pointer h-4 w-4 hover:scale-125 transition" onClick={handleForward}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                        <path d="M11.93 1L18 7.07L11.93 13.14M1 7.07H17.83" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className="px-32 py-4 w-full flex flex-col justify-start">
            <InputPill title="Where is your office located?" placeholder="City, State" setState={setOfficeLocation} inputType="text"/>
            <InputPill title="What industry are you part of?" placeholder="Manufacturing, Software Development, etc." setState={setIndustry} inputType="text" />
            <InputPill title="When was the company founded?" placeholder="mm-dd-yyyy" setState={setCompanyFounded} inputType="text" />
        </div>
    </div>
  );
};

export default BasicInfo;
