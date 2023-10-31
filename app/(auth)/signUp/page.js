"use client";
import React, { useEffect, useState } from "react";


import config from "app/aws-exports";
import { useRouter } from "next/navigation";
import Welcome from "@/components/SignUp/Welcome";
import BasicInfo from "@/components/SignUp/Business/BasicInfo";
import Services from "@/components/SignUp/Business/Services";
import CreateBusinessAccount from "@/components/SignUp/Business/CreateBusinessAccount";
import AboutYou from "@/components/SignUp/Student/AboutYou";
import Education from "@/components/SignUp/Student/Education";
import CreateStudentAccount from "@/components/SignUp/Student/CreateStudentAccount";

const SignUp = () => {

  const [userType, setUserType] = useState("");
  const [screen, setScreen] = useState("PG_WELCOME");
  const [businessForm, setBusinessForm] = useState({
    officeLocation: "",
    industry: "",
    companyFounded: "",
    services: [],
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [studentForm, setStudentForm] = useState({
    university: "",
    major: "",
    classification: "",
    graduationDate: "",
    skills: [],
    interests: [],
    email: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    console.log(businessForm);
  }, [businessForm]);

  useEffect(() => {
    console.log(studentForm);
  }, [studentForm]);


  const getCurrentPage = () => {
    if(screen === "PG_WELCOME") {
      return <Welcome setUserType={setUserType} setScreen={setScreen}/>
    } else if(screen === "PG_BUSINESS_BASICINFO") {
      return <BasicInfo setScreen={setScreen} setForm={setBusinessForm} form={businessForm}/>
    } else if(screen === "PG_BUSINESS_SERVICES") {
      return <Services setScreen={setScreen} setForm={setBusinessForm} form={businessForm}/>
    }else if(screen === "PG_BUSINESS_CREATEACCOUNT") {
      return <CreateBusinessAccount setScreen={setScreen}/>
    }else if(screen === "PG_STUDENT_EDUCATION") {
      return <Education setScreen={setScreen}/>
    }else if(screen === "PG_STUDENT_ABOUTYOU") {
      return <AboutYou setScreen={setScreen}/>
    }else if(screen === "PG_STUDENT_CREATEACCOUNT") {
      return <CreateStudentAccount setScreen={setScreen}/>
    }else {
      return <div>Error</div>
    }
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center m-0 p-0 bg-gradient-to-tr from-blue-100 via-orange-100 to-orange-200">
      {getCurrentPage()}
    </div>
  );
};

export default SignUp;
