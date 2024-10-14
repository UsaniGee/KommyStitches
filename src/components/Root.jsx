import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import { MenuContext } from '../context/MenuContext'
const Root = () => {
  const {handleClose} = useContext(MenuContext)
  return (
    <div>
        <NavBar />
        <div onClick={handleClose}>
           <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Root