import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
  return (
    <ul className='flex gap-10 '>
      <NavLink to='/'>
          <li>Home</li>
      </NavLink>
      <NavLink to='/shop'>
          <li>Shop</li>
      </NavLink >
      <NavLink to='/about'>
          <li>About</li>
      </NavLink>
     <NavLink to='/contact'>
        <li>Contact</li>
     </NavLink>
    </ul>
  )
}

export default Links
