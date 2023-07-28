"use client";
import React, { useEffect } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/components/Context";

const Page = () => {
  const router = useRouter();
  const { user, setUser } = useUserContext();

  const handleSignOut = async (e) => {
    try {
      await Auth.signOut();
      router.push("/signIn");
    } catch (error) {
      console.error("Error signing out user ", error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={(e) => handleSignOut(e)}>Log Out</button>
    </div>
  );
};

export default Page;
