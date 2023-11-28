import React from 'react'
import Image from 'next/image'

const MarketplaceBoardNavigation = ({name}) => {
  return (
    <div className='w-full h-full bg-rawSienna-500 flex flex-col items-center'>
      <Image src='/Board_Marketplace/boardLogo.png' width={250} height={250} alt='Logo'/>
      <div className="flex items-center py-3 border-t-gray-200 rounded-full bg-[#A06734] w-11/12">
        <svg className='flex-shrink-0 w-4 h-4 mx-6 text-white scale-150' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M25 2.34375V16.4062C25 17.7002 23.9502 18.75 22.6562 18.75H20.3125V8.59375C20.3125 6.44043 18.5595 4.6875 16.4062 4.6875H6.24999V2.34375C6.24999 1.0498 7.2998 0 8.59374 0H22.6562C23.9502 0 25 1.0498 25 2.34375ZM18.75 8.59375V22.6562C18.75 23.9502 17.7002 25 16.4062 25H2.34375C1.0498 25 0 23.9502 0 22.6562V8.59375C0 7.2998 1.0498 6.25 2.34375 6.25H16.4062C17.7002 6.25 18.75 7.2998 18.75 8.59375ZM15.4297 9.96094C15.4297 9.63867 15.166 9.375 14.8437 9.375H3.71093C3.38867 9.375 3.125 9.63867 3.125 9.96094V12.5H15.4297V9.96094Z" fill="white"/>
        </svg>
        <p className=" text-lg font-semibold text-white"> All Projects </p>
      </div>


    </div>
  )
}

export default MarketplaceBoardNavigation