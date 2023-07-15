'use client';
import React, { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import config from 'app/aws-exports';
import { useRouter } from 'next/navigation'
import { useUserContext } from '@/components/Context';
Amplify.configure(config);

const Page = () => {
    const router = useRouter()
    const { user, setUser } = useUserContext();

    return (
        <div>Profile Page for {user?.attributes?.email}</div>
    )
}

export default Page