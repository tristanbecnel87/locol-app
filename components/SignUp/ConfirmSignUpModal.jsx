import React, { useState } from 'react'
import InputPill from '../InputPill'
import Modal from 'react-bootstrap/Modal'

const ConfirmSignUpModal = ({username, password, confirm, setShowConfirmationModal}) => {
    const [code, setCode] = useState("");

    return (
        
        <div className=" w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto [--overlay-backdrop:static] blur-0">
            <div className="mt-7 opacity-100 duration-500 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                <div className="w-full flex flex-col bg-stone-50 border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div className="flex justify-between items-center pt-6 pb-3 px-4 ">
                        <div className='w-7' />
                        <h3 className="font-bold text-black text-3xl text-center">
                            Confirm Your Account
                        </h3>
                        <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent
                            text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none scale-125 hover:scale-[1.5] transition duration-300 ease-in-out" 
                            onClick={() => setShowConfirmationModal(false)}>
                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    </div>
                    <div className="px-8 overflow-y-auto">
                        <InputPill title={"Enter your confirmation code:"} setState={setCode}/>
                    </div>
                    <div className="flex justify-center items-center gap-x-2 py-5 px-4 ">
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