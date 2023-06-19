'use client';
import React, { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import config from 'app/aws-exports';
Amplify.configure(config);

const Page = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUserAttributes = async () => {
            try {
                const currentUser = await Auth.currentAuthenticatedUser();
                const attributes = currentUser.attributes;
                console.log(currentUser);
                setUser(currentUser);
        
            } catch (error) {
                console.error("Failed to fetch user attributes.", error);
            }
        };

        fetchUserAttributes();
    }, [])

    return (
        <div>Profile Page for {user?.attributes.email}</div>
    )
}

export default Page