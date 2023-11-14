"use client";
import React, {useState } from "react";
import CheckboxList from "@/components/CheckboxList";
import InputPill from "@/components/InputPill";

const AboutYou = ({setScreen, setForm, form}) => {

    const [selectedInterests, setSelectedInterests] = useState([]);
    const [skills, setSkills] = useState("");
    
    const interests = [
        "Copywriting", 
        "Email Marketing", 
        "Graphic Design", 
        "Marketing Strategy", 
        "Video Marketing", 
        "Search Engine Optimization", 
        "Social Media Marketing", 
        "Web Analytics", 
        "Web Development"
    ]

    const updateSelected = (index, value) => {
        var selected = selectedInterests;
        if(value) {
            selected.push(interests[index]);
        } else {
            selected.splice(selected.indexOf(interests[index]), 1);
        }
        setSelectedInterests(selected);
    }

    const updateForm = () => {
        setForm({
            ...form,
            interests: selectedInterests,
            skills: skills
        });
    }

    const handleBack = () => {
        updateForm();
        setScreen("PG_STUDENT_EDUCATION");
    }

    const handleForward = () => {
        updateForm();
        setScreen("PG_STUDENT_CREATEACCOUNT");
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
                <h1 className=" text-4xl text-neutral-800 font-bold">About You</h1>
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
            <InputPill title="Input Your Skills" placeholder="" setState={setSkills} inputType="text"/>
            <label className="block text-lg font-semibold mb-2 text-black dark:text-white">Areas of Interest</label>
            <CheckboxList list={interests} updateSelected={updateSelected}/>
        </div>
    </div>
  );
};

export default AboutYou;
