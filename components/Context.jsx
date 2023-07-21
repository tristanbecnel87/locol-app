'use client'

import React, { useState, createContext, useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Auth } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';

const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {

    const router = useRouter()
    const [user, setUser] = useState()

    useEffect(() => {
        import('preline') // CSS component library

        const fetchUserAttributes = async () => {
            try {
                const currentUser = await Auth.currentAuthenticatedUser();
                const attributes = currentUser.attributes;
                setUser(currentUser);
            } catch (error) {
                console.log("error: " + error)
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