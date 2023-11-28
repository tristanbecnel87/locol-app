import ProjectBoardNavigation from '@/components/MarketplaceBoardNavigation'
import ScrollableContent from '@/components/ScrollableContent'
import React from 'react'

const page = () => {
  return (
    <div className=' flex h-[110vh] w-full border border-t-gray-200'>
        <div className=' w-1/5 h-full'>
            <ProjectBoardNavigation name={"Project"} />
        </div>
        <div className=' w-4/5 h-full'>
            <div className='flex flex-col h-full w-full'>
                <h1 className=' text-rawSienna-500 font-bold text-5xl px-20 py-20'>PROJECT BOARD</h1>
                <h1 className='text-4xl text-gray-500 px-20 py-3 font-bold' >Businesses are seeking...</h1>
                <div className='mx-6'>
                    <ScrollableContent>
                        <div className='flex flex-col'>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                            <div>
                                test
                            </div>
                        </div>
                    </ScrollableContent>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page