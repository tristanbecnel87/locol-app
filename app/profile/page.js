'use client';
import React, { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify';

const Page = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUserAttributes = async () => {
            try {
                const currentUser = await Auth.currentAuthenticatedUser();
                const attributes = currentUser.attributes;
                console.log("User attributes:", attributes);
                setUser(currentUser);
        
                router.push('/dashboard')
            } catch (error) {
                console.error("Failed to fetch user attributes.", error);
            }
        };

        fetchUserAttributes();
    }, [])

    return (
        <div>Profile Page for {user}</div>
    )
}

export default Page