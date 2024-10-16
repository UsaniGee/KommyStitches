import React from 'react'
import HotNew from '../../src/assets/images/Coming.jpg'
import CountDown from './CountDown'

const ComingSoon = () => {
  return (
    <div className=' s:px-0 mb-20 s:m-3'>
      <div className='relative'>
       <div className='px-16 s:px-0 sm:px-5 md:top-10 absolute top-[50px] s:top-5 left-0 s:left-4 s:w-[250px] sm:w-[300px] w-[700px] text-white text-5xl s:text-3xl sm:text-3xl '>
            <h1 className='z-10 absolute text-6xl lg:text-8xl xl:text-9xl s:text-5xl text-center s:text-center font-bold s:px-14 md:px-5 s:w-[220px] md:w-[300px] lg:w-[400px] xl:w-[500px]'>Big Promo Sales</h1>
            <h2 className='z-10 absolute animate-bounce s:animate-none top-24 xl:top-[420px] lg:top-[320px] md:top-[200px] sm:top-[200px] s:top-[150px] s:w-[300px] s:m-0 s:text-center s:text-2xl sm:text-2xl md:text-3xl font-bold '>Coming to Shop Soon...</h2>
       </div>
       <div className='z-10 absolute bottom-10 s:bottom-5 right-8 text-white text-2xl s:text-sm font-semibold'>
       <CountDown />
       </div>
        <img className='s:relative' src={HotNew} alt="Hotnew" />
      </div>
    </div>
  )
}

export default ComingSoon
