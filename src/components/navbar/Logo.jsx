import React, { useContext } from 'react'
import { CiMenuBurger, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext'
import { CartContext } from '../../context/CartContext'
import { ProductContext } from '../../context/ProductContext'

const Logo = () => {
  const {isOpen, setIsOpen} = useContext(MenuContext)
  const {amount} = useContext(CartContext)
  const {setShowSearch} = useContext(ProductContext)
  return (
    <div className='flex items-center text-6xl s:text-5xl font-thin p-3 s:p-1 bg-white bg-opacity-75'>
      <div className='flex mx-5 justify-end xl:justify-end xl:pr-[40px] s:pl-[140px] w-[62%]'>
      <Link   to='/'>
      <div className='text-[#40271E] s:ml-0'>
       <div> K<span className='animate-pulse text-4xl s:text-3xl'>ommy's</span>C<span className='animate-pulse text-4xl s:text-3xl'>loset</span></div>
      </div>
          </Link>
      </div>

      {/* Search, account, cart icon */}
    <div className='flex items-center w-[36%] justify-end'>
        <div className='flex text-3xl s:hidden gap-3 text-[#40271E] items-center'>
           <CiSearch onClick={() => setShowSearch(true)}/>

           {/* Shopping cart */}
         <Link to='cart'>
             <div className='flex relative'>
                  <CiShoppingCart />
                  {/* Update amount */}
                <div className='flex items-center justify-center text-xl rounded-full absolute -right-2 -top-2 font-bold bg-pink-200 w-6 h-6 '>
                  {amount}
                </div>
            </div>
       </Link>

       {/* User Login and register */}
             <div className='group relative mr-10'>
             <Link to={'/login'}><CiUser  className='cursor-pointer'/></Link>
                <div className='group-hover:block hidden absolute dropdown-menu -right-12 pt-2 text-xl z-10'>
                    <div className=' flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                      <p className='cursor-pointer hover:text-black'>My Profile</p>
                      <Link to={'/order'}>
                      <p className='cursor-pointer hover:text-black'>Orders</p></Link>
                      <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
             </div>
      </div>


      <div className=' hidden s:block text-3xl s:text-2xl s:px-1 '>
         <div className='flex'>
         <CiSearch onClick={() => setShowSearch(true)}/>
          <div className='group relative'>
           <Link to={'/login'}><CiUser  className='cursor-pointer'/></Link>
           <div className='group-hover:block hidden absolute dropdown-menu -right-6 pt-2 text-xl z-10'>
                    <div className=' flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                      <p className='cursor-pointer hover:text-black'>My Profile</p>
                      <Link to={'/order'}>
                      <p className='cursor-pointer hover:text-black'>Orders</p></Link>
                      <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
          </div>
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
        <div onClick={() => setIsOpen(!isOpen)} className='hidden text-3xl s:text-2xl px-3 s:px-0 s:pr-3'>
               <CiMenuBurger />
               </div>
    </div>
       
    </div>
  )
}

export default Logo
