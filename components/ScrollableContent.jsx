import React from 'react'

const ScrollableContent = ({children}) => {
  return (
    <div className="max-h-[800px] w-full overflow-y-auto
    [&::-webkit-scrollbar]:w-4
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-track]:bg-gray-100
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-gray-300
    dark:[&::-webkit-scrollbar-track]:bg-slate-700
    dark:[&::-webkit-scrollbar-thumb]:bg-slate-500" style={{direction: "rtl"}}>
        <div className='ml-10' style={{direction: "ltr"}}>
          {children}
        </div>
    </div>
  )
}

export default ScrollableContent