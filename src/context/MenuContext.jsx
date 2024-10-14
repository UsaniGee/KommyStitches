import React, { createContext, useState } from 'react'

export const MenuContext = createContext();

const MenuContextProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClose = () => {
        setIsOpen(false);
    }
  return (
    <MenuContext.Provider value={{isOpen, setIsOpen, handleClose}}>
        {children}
    </MenuContext.Provider>
  )
}

export default MenuContextProvider
