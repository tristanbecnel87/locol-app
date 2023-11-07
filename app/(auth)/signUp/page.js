"use client";
import React, { useEffect, useState } from "react";


import config from "app/aws-exports";
import { useRouter } from "next/navigation";
import { Auth } from "aws-amplify";
import Welcome from "@/components/SignUp/Welcome";
import BasicInfo from "@/components/SignUp/Business/BasicInfo";
import Services from "@/components/SignUp/Business/Services";
import CreateBusinessAccount from "@/components/SignUp/Business/CreateBusinessAccount";
import AboutYou from "@/components/SignUp/Student/AboutYou";
import Education from "@/components/SignUp/Student/Education";
import CreateStudentAccount from "@/components/SignUp/Student/CreateStudentAccount";

const SignUp = () => {

  const router = useRouter();

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
    skills: "",
    interests: [],
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   console.log("business form changed");
  //   console.log(businessForm);
  // }, [businessForm]);

  // useEffect(() => {
  //   console.log("student form changed");
  //   console.log(studentForm);
  // }, [studentForm]);

  const handleStudentSignUp = async () => {
    console.log("login with: ", userType);
    console.log(studentForm);
    try {
      const {user} = await Auth.signUp({
        username: studentForm.email,
        password: studentForm.password,
        attributes: {
          "custom:university": studentForm.university,
          "custom:study": studentForm.major,
          "custom:classification": studentForm.classification,
          "custom:graduate": studentForm.graduationDate,
          "custom:skills": studentForm.skills,
          // interests: studentForm.interests.join(","),
        }

      });
      console.log("User signed in", user.attributes);
      router.push("/dashboard");
    } catch (error) {
      console.log("Error signing in", error);
    }
  }

  const handleBusinessSignUp = async () => {
    console.log("login with: ", userType);
    console.log(businessForm);
    try {
      // const user = await Auth.signIn(email, password);
      // console.log("User signed in", user.attributes.email);
      router.push("/dashboard");
    } catch (error) {
      console.log("Error signing up", error);
    }
  }


  const getCurrentPage = () => {
    if(screen === "PG_WELCOME") {
      return <Welcome setUserType={setUserType} setScreen={setScreen}/>
    } else if(screen === "PG_BUSINESS_BASICINFO") {
      return <BasicInfo setScreen={setScreen} setForm={setBusinessForm} form={businessForm}/>
    } else if(screen === "PG_BUSINESS_SERVICES") {
      return <Services setScreen={setScreen} setForm={setBusinessForm} form={businessForm}/>
    }else if(screen === "PG_BUSINESS_CREATEACCOUNT") {
      return <CreateBusinessAccount setScreen={setScreen} setForm={setBusinessForm} form={businessForm} signUp={handleBusinessSignUp}/>
    }else if(screen === "PG_STUDENT_EDUCATION") {
      return <Education setScreen={setScreen} setForm={setStudentForm} form={studentForm}/>
    }else if(screen === "PG_STUDENT_ABOUTYOU") {
      return <AboutYou setScreen={setScreen} setForm={setStudentForm} form={studentForm}/>
    }else if(screen === "PG_STUDENT_CREATEACCOUNT") {
      return <CreateStudentAccount setScreen={setScreen} setForm={setStudentForm} form={studentForm} signUp={handleStudentSignUp}/>
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
