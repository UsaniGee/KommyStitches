import React, { useContext } from 'react'
import Links from './navbar/Links'
import Logo from './navbar/Logo'
import Menu from './Menu'
import Searchbar from './Searchbar'


const NavBar = () => {
  return (
    <nav className='w-full flex relative h-[115px] z-20 '>
           <div className='fixed w-full'>
           <div className='flex p-1 s:p-3 bg-[#D8A48E] bg-opacity-55 text-white  justify-around items-center w-full '> 
                <Links />
            </div>
            <div className='relative shadow-xl'>
                <Logo />                
            </div>
               <Menu />
               <Searchbar />
           </div>
          
    </nav>
  )
}

export default NavBar
