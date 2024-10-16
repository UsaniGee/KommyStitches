import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { FaPlus, FaTrash } from 'react-icons/fa'
import { FaSquareMinus, FaSquarePlus } from 'react-icons/fa6'

const CartItem = ({item}) => {
    const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)
  return (
    <div className='s:w-full md:flex-row md:items-center md:justify-between text-gray-500'>
    <div className='flex justify-between items-center pt-4'>

      {/* Image and remove item */}
     <div>
         {/* Image */}
    <div className=' s:my-5 w-[100px]'>
    <Link to={`/product/${item.id}`}>
      <img className='w-[] object-cover aspect-square' src={item.image} alt="" />
      </Link>
    </div>
     {/* Remove */}
     <div className=' flex text-red-600 hover:underline text-center items-center justify-center gap-1 my-2' onClick={() => removeFromCart(item.id)} >
        <p><FaTrash /></p>
        <p>Remove</p>
     </div>
     </div>

    {/* Title */}
     <div className=' xl:text-[16px] text-xs w-[250px]'> 
     <Link to={`/product/${item.id}`}>
     <p className='hover:underline text-left'>{item.title}</p>
     </Link>
     </div>
    <div className=''>
       {/* Price */}
     <div className='text-center p-3 text-gray-600'>
        <p>$ {item.price}</p>
        {/* <p>{`$ ${parseFloat(item.price * item.amount).toFixed(2)}`}</p> */}
     </div>

     {/* Quantity */}
     <div className='flex gap-5 border cursor-default justify-center items-center'>
        <p className='text-3xl shadow-md text-pink-100' onClick={() => decreaseAmount(item.id)}><FaSquareMinus /></p>
        <p>{item.amount}</p>
        <p className='text-3xl shadow-md text-pink-100' onClick={() => increaseAmount(item.id)}><FaSquarePlus /></p>
     </div>
    </div>
     
    </div>
 </div>
  )
}

export default CartItem
