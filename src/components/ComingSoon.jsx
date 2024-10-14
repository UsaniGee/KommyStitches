import React from 'react'
import HotNew from '../../src/assets/images/Coming.png'
import CountDown from './CountDown'

const ComingSoon = () => {
  return (
    <div className='bg-pink-200 mx-20 mb-20 s:m-3'>
      <div className='relative'>
       <div className='md:top-0 absolute top-[50px] s:top-5 right-[60px] s:left-4 s:w-[250px] w-[700px] text-white text-5xl s:text-3xl font-thin '>
       <h1 className='text-8xl s:text-3xl'>Big Promo Sales</h1>
       <h2 className='animate-bounce s:animate-none m-10 s:m-0 text-center s:text-left'>Coming to Shop Soon...</h2>
       </div>
       <div className='z-10 absolute bottom-10 s:bottom-5 right-10 text-white text-2xl s:text-sm font-semibold'>
       <CountDown />
       </div>
        <img className='s:relative s:left-24' src={HotNew} alt="" />
      </div>
    </div>
  )
}

export default ComingSoon
