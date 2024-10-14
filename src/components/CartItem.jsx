import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartItem = ({item}) => {
    const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)
  return (
    <div className='bg-pink-5 s:w-full  p-4 md:flex-row md:items-center md:justify-between '>
    <div className='flex items-center gap-2 '>
        {/* Image */}
    <div className='w-[10%] s:h-[87.5px] s:w-[200px] s:my-5 '>
    <Link to={`/product/${item.id}`}>
      <img className='p-3' src={item.image} alt="" />
      </Link>
    </div>
    {/* Title */}
     <div className=' text-sm'>
     <Link to={`/product/${item.id}`}>
     <p className='hover:underline'>{item.title}</p>
     </Link>
     </div>
     {/* Price */}
     <div className=''>
        <p>$ {item.price}</p>
        <p>{`$ ${parseFloat(item.price * item.amount).toFixed(2)}`}</p>
     </div>
     {/* Quantity */}
     <div className='flex gap-5 border'>
        <p onClick={() => decreaseAmount(item.id)}>-</p>
        <p>{item.amount}</p>
        <p onClick={() => increaseAmount(item.id)}>+</p>
     </div>
      {/* Remove */}
      <div onClick={() => removeFromCart(item.id)} className='text-red-600 hover:underline'>
        <p>Remove Item</p>
     </div>
    </div>
 </div>
  )
}

export default CartItem
