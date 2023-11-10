import React, { useState } from 'react'
import InputPill from '../InputPill'

const ConfirmSignUpModal = ({username, password, confirm}) => {
    const [code, setCode] = useState("");

    return (
        <div id="hs-vertically-centered-modal" className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto [--overlay-backdrop:static]">
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div className="flex justify-between items-center py-3 px-4 ">
                        <div className='w-7' />
                        <h3 className="font-bold text-black text-2xl text-center underline">
                            Confirm Your Account
                        </h3>
                        <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent
                            text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white" 
                            data-hs-overlay="#hs-vertically-centered-modal">
                            <span className="sr-only">Close</span>
                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    </div>
                    <div className="px-12 overflow-y-auto">
                        <InputPill title={"Enter your code:"} setState={setCode}/>
                    </div>
                    <div className="flex justify-center items-center gap-x-2 py-3 px-4 ">
                        <button className="bg-sky-900 text-white rounded-full py-2 px-4 hover:bg-sky-700 transition duration-300" onClick={() => confirm(username, password, code)}>
                            <h2 className=" mx-8 font-semibold">Confirm</h2>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmSignUpModal