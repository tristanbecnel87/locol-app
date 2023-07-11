'use client'
import React from 'react'
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  const handleSignOut = async (e) => {
    try {
      await Auth.signOut();
      router.push('/signIn')
    } catch (error) {
      console.error('Error signing out user ', error);
    }
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={(e) => handleSignOut(e)}>Log Out</button>
    </div>
  )
}

export default Page