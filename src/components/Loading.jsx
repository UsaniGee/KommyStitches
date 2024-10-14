import React from 'react'

const Loading = () => {
  return (
    <div className='relative'>
      <div className='border-solid border-[10px] border-transparent border-t-orange-300 border-r-orange-300 rounded-[50%] absolute top-[50%] left-[50%] w-[3.5em] h-[3.5em] ml-[-1.75em] mt-[-1.5em] animate-spin-2s '></div>
      <div className='border-solid border-[8px] border-transparent border-t-orange-300 border-r-orange-300 rounded-[50%] absolute top-[50%] left-[50%] w-[2.1em] h-[2.1em] ml-[-1.05em] mt-[-1.05em] animate-spin-1.75s'></div>
      <div className='border-solid border-[6px] border-transparent border-t-orange-300 border-r-orange-300 rounded-[50%] absolute top-[50%] left-[50%] w-[0.8em] h-[0.8em] ml-[-0.4em] mt-[-0.4em] animate-spin-1.5s'></div>
        <div>
            <h1 className=' relative top-24 text-2x animate-pulse text-white w-full'>
              Please wait...
            </h1>
        </div>
    </div>
    
  )
}

export default Loading
