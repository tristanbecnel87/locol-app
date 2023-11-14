"use client";
import React, { useEffect, useState } from "react";


import config from "app/aws-exports";
import { useRouter } from "next/navigation";
import { Amplify, Auth } from "aws-amplify";
import Welcome from "@/components/SignUp/Welcome";
import BasicInfo from "@/components/SignUp/Business/BasicInfo";
import Services from "@/components/SignUp/Business/Services";
import CreateBusinessAccount from "@/components/SignUp/Business/CreateBusinessAccount";
import AboutYou from "@/components/SignUp/Student/AboutYou";
import Education from "@/components/SignUp/Student/Education";
import CreateStudentAccount from "@/components/SignUp/Student/CreateStudentAccount";

Amplify.configure(config);

const SignUp = () => {

  const router = useRouter();
  const [userType, setUserType] = useState("");
  const [screen, setScreen] = useState("PG_WELCOME");
  const [businessForm, setBusinessForm] = useState({
    officeLocation: "",
    industry: "",
    companyFounded: "",
    services: [],
    businessName: "",
    fullName: "",
    email: "",
    password: "",
  });

  const [studentForm, setStudentForm] = useState({
    university: "",
    major: "",
    classification: "",
    graduationDate: "",
    skills: "",
    interests: [],
    fullName: "",
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
          "custom:interests": studentForm.interests.join(","),
          "custom:fullname": studentForm.fullName,
          "custom:isbusiness": "false",
          "custom:business" : "N/A"
        }
      });
      console.log("User signed in", user.attributes);
    } catch (error) {
      console.log("Error signing in", error);
    }
  }

  const handleBusinessSignUp = async () => {
    console.log("login with: ", userType);
    console.log(businessForm);
    try {
      const {user} = await Auth.signUp({
        username: businessForm.email,
        password: businessForm.password,
        attributes: {
          "custom:officelocation": businessForm.officeLocation,
          "custom:industry": businessForm.industry,
          "custom:companyfounded": businessForm.companyFounded,
          "custom:services": businessForm.services.join(","), // update amplify schema
          "custom:fullname": businessForm.fullName,
          "custom:isbusiness": "true",
          "custom:business" : businessForm.businessName
        }
      });
      console.log("User signed up", user.attributes);
    } catch (error) {
      console.log("Error signing in", error);
    }
  }

  const handleConfirmSignUp = async (username, password, code) => {
    console.log("confirming sign up");
    console.log(username, code)
    try {
      await Auth.confirmSignUp(username, code);

      //if successful, sign in
      await Auth.signIn(username, password);

      //if successful, redirect to dashboard
      router.push("/dashboard");
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  };


  const getCurrentPage = () => {
    if(screen === "PG_WELCOME") {
      return <Welcome setUserType={setUserType} setScreen={setScreen}/>
    } else if(screen === "PG_BUSINESS_BASICINFO") {
      return <BasicInfo setScreen={setScreen} setForm={setBusinessForm} form={businessForm}/>
    } else if(screen === "PG_BUSINESS_SERVICES") {
      return <Services setScreen={setScreen} setForm={setBusinessForm} form={businessForm}/>
    }else if(screen === "PG_BUSINESS_CREATEACCOUNT") {
      return <CreateBusinessAccount setScreen={setScreen} setForm={setBusinessForm} form={businessForm} signUp={handleBusinessSignUp} confirm={handleConfirmSignUp}/>
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
