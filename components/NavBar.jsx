import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-white p-4 px-16 tracking-wider">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <Image
                src="/LocolLogo.svg"
                alt="Vercel Logo"
                width={126}
                height={77}
            />
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-regalBlue-200 border-regalBlue-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-lg lg:flex-grow flex justify-center">
                <Link href="/" class="block mt-4 lg:inline-block lg:mt-0 text-regalBlue-800 mr-16">
                    Home
                </Link>
                <Link href="/marketplace" class="block mt-4 lg:inline-block lg:mt-0 text-regalBlue-800 mr-16">
                    Marketplace
                </Link>
                <Link href="/board" class="block mt-4 lg:inline-block lg:mt-0 text-regalBlue-800 mr-16">
                    Board
                </Link>
                <Link href="/community" class="block mt-4 lg:inline-block lg:mt-0 text-regalBlue-800">
                    Community
                </Link>
            </div>
            <div>
                <Link href="/auth/signIn" class="text-lg px-4 py-2 border-2 rounded text-rawSienna-500 border-rawSienna-500 hover:border-transparent hover:text-rawSienna-700 mt-4 lg:mt-0">Dashboard</Link>
            </div>
        </div>
    </nav>
  )
}

export default NavBar