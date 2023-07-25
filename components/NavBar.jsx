'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Amplify } from 'aws-amplify';
import config from 'app/aws-exports';
import { useUserContext } from './Context'
Amplify.configure(config);


// TailwindCSS styles
const navBtnStyles = "block mt-4 lg:inline-block lg:mt-0 text-regalBlue-800 border-b-transparent border-b-4 pb-2 hover:border-b-regalBlue-800"
const disabled = "block mt-4 lg:inline-block lg:mt-0 text-gray-400 pb-2"

const NavBar = () => {

    const { user, setUser } = useUserContext()
    const router = useRouter()

    useEffect(() => {
        if (user) {
            console.log("user: " + user)
        } else {
            console.log("no user")
        }
    }, [])

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white p-4 px-16 tracking-wider font-sans">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image
                    src="/LocolLogo.svg"
                    alt="Vercel Logo"
                    width={126}
                    height={77}
                    placeholder='blur'
                    blurDataURL='/LocolLogo.svg'
                />
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-regalBlue-600 border-regalBlue-600 hover:border-regalBlue-800">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-lg lg:flex-grow lg:flex lg:justify-center">
                    <Link href="/" className={navBtnStyles + " mr-16"}>
                        Home
                    </Link>
                    <Link href="#/marketplace" className={navBtnStyles + " mr-16"}>
                        Marketplace
                    </Link>
                    <Link href="#/board" className={navBtnStyles + " mr-16"}>
                        Board
                    </Link>
                    <Link href="#/community" className={disabled}>
                        Community
                    </Link>
                </div>
                <div className="flex flex-row">
                    <>
                        {user ? (
                            <Link href="/profile" className="text-lg px-4 py-2 border-2 rounded-md text-rawSienna-500 border-rawSienna-500 hover:border-transparent hover:bg-rawSienna-500 hover:text-white mt-4 mr-2 lg:mt-0">Profile</Link>
                        ) : (
                            <Link href="/signIn" className="text-lg px-4 py-2 border-2 rounded-md text-rawSienna-500 border-rawSienna-500 hover:border-transparent hover:bg-rawSienna-500 hover:text-white mt-4 mr-2 lg:mt-0">Login</Link>
                        )}
                    </>
                    <Link href="/dashboard" className="text-lg px-4 py-2 border-2 rounded-md text-rawSienna-500 border-rawSienna-500 hover:border-transparent hover:bg-rawSienna-500 hover:text-white mt-4 lg:mt-0">Dashboard</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar