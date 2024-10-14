import React, { useContext } from 'react'
import  { MenuContext } from '../context/MenuContext'
import { TfiClose } from "react-icons/tfi";

const Menu = () => {
    const {isOpen, handleClose} = useContext(MenuContext);
  return (
      <div className={` ${isOpen ? 'right-0' : '-right-full'} s:block w-full bg-white  fixed top-[109px] h-full shadow-2xl md:w-[35w] xl:max-w-[30vw] transition-all duration-100 z-20 px-4 lg:px-[35px] opacity-75`}>
     <div onClick={handleClose} className='hover:bg-red-600 w-[30px] h-[40px] hover:text-white flex justify-center items-center mx-3 my-5 p-5'>
      <div  className=' text-2xl'><TfiClose/></div>
     </div>
    </div>
  )
}

export default Menu
