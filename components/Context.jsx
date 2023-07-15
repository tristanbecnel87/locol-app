'use client'

import React, { useState, createContext, useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthenticator } from '@aws-amplify/ui-react';

const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {

    const router = useRouter()
    const [user, setUser] = useState()

    useEffect(() => {
        const fetchUserAttributes = async () => {
            try {
                const currentUser = await Auth.currentAuthenticatedUser();
                const attributes = currentUser.attributes;
                setUser(currentUser);
                console.log("context user: " + user)
            } catch (error) {
                setUser(null)
                // router.push('/signIn')
            }
        };

        fetchUserAttributes();
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)