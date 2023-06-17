'use client'
import React from 'react'
import { Auth } from 'aws-amplify';

const Page = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => Auth.signOut()}>Log Out</button>
    </div>
  )
}

export default Page