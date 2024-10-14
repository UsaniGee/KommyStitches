import React from 'react'
import { PiCopyrightThin } from 'react-icons/pi'
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className='flex w-full relative bottom-0 bg-[#F7DEE7] h-[100px] s:h-[50px] items-center justify-between px-10 s:px-2'>
     <div className='flex items-center gap-2 s:gap-1 text-2xl s:text-[13px]'>
      <span><PiCopyrightThin /></span>
      <span>2024</span>
      <div>K<span>ommy</span>S<span>titches</span></div>      
     </div>
     <div className='flex justify-between w-1/6 s:w-[80px] text-3xl s:text-xl'>
      <div><SiInstagram /></div>
      <div><SiFacebook /></div>
      <div><SiWhatsapp /></div>    
     </div>
    </footer>
  )
}

export default Footer
