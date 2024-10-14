import React from 'react'

const BtnStyled = (props) => {
  return (
    <div>
      <button className={`z-10 relative text-2xl font-serif text-[#40271E] px-[0.5em] py-[0.5em] bg-[#D9D9D9] overflow-hidden transition-[color] duration-[0.4s] ease-in-out before:content-[" "] before:-z-10 before:absolute before:top-[-50%] before:left-[10%] before:w-[1em] before:h-[1em] before:rounded-[50%] before:bg-[#40271E]  before:translate-x-[50%] before:scale-[0,0,0] before:duration-[0.4s] before:ease-in-out hover:cursor-pointer hover:text-[#D9D9D9] hover:before:translate-x-[500%] hover:before:scale-[15] ${props.BtnStyle} `}>{`${props.Name}`}</button>
    </div>
  )
}

export default BtnStyled
