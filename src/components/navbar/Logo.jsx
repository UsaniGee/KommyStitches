import React, { useContext } from 'react'
import { CiMenuBurger, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext'
import { CartContext } from '../../context/CartContext'

const Logo = () => {
  const {isOpen, setIsOpen} = useContext(MenuContext)
  const {amount, setAmount} = useContext(CartContext)
  return (
    <div className='flex items-center text-6xl s:text-5xl font-thin p-3 s:p-1 bg-white bg-opacity-75'>
      <div className='flex mx-5 justify-center w-[90%]'>
      <Link   to='/'>
      <div className='text-[#40271E] s:ml-0 ml-36'>
        K<span className='animate-pulse text-4xl s:text-3xl'>ommy's</span>C<span className='animate-pulse text-4xl s:text-3xl'>loset</span>
      </div>
          </Link>
      </div>
      <div className='flex text-3xl s:hidden gap-3 text-[#40271E]'>
        <CiSearch />
       <Link to='cart'>
       <div className='flex relative'>
       <CiShoppingCart />
      <div className='flex items-center justify-center text-xl rounded-full absolute -right-2 -top-2 font-bold bg-pink-200 w-6 h-6 '>
      <p className=' '> {amount}</p>
      </div>
       </div>
       </Link>
        <CiUser />
      </div>
      <div className=' hidden s:block text-3xl s:text-2xl s:px-1 '>
         <div className='flex'>
          <CiUser />
          <Link to='cart'>
           <div className='flex relative'>
           <CiShoppingCart />
            <div className='flex items-center justify-center text-xs rounded-full absolute -right-1 -top-2 font-bold bg-pink-200 w-5 h-5'>
              <p className=' '> {amount}</p>
            </div>
           </div>
          </Link>
         </div>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className='text-3xl s:text-2xl px-3 s:px-0 s:pr-3'>
               <CiMenuBurger />
               </div>
       
    </div>
  )
}

export default Logo
