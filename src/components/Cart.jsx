import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import { FaCartArrowDown } from "react-icons/fa";
import BtnStyled from './BtnStyled';
import { Link, NavLink } from 'react-router-dom';

const Cart = () => {
  const {cart, clearCart, total, amount} = useContext(CartContext) 

  return(
    <div className=' m-10'>
     
      {/* Conditional rendering */}

      {cart.length === 0 ? (
        <div className='h-screen'>
          <div className='text-center text-gray-500 h-1/2 flex justify-center items-center flex-col gap-3'> 
        <div className='text-7xl'><FaCartArrowDown /></div>
        <div>Your cart is currently empty</div>
        <div>Browse our categories and discover our best deals!</div>
        <div>
        <NavLink to='/shop'>
            <BtnStyled Name='Shop Now' BtnStyle='bg-[#D9D9D9] font-semibold rounded-full px-[100px] lg:w-1/2 text-2xl mt-3 shadow-xl'/>
        </NavLink>
        </div>
        </div>
        </div>
      ) : (
        <section>
        <div className='flex s:flex-col sm:flex-col mx-20 s:mx-0 gap-5 s:items-center sm:items-center'>
        <div className='bg-gray-50 my-10 s:my-0 border rounded-lg w-[80%] '>
         <div className='border-b py-1 px-10 text-xl font-bold'> Cart ({amount})</div>
          {cart.map((item) => (
            <div className='' key={item.id}>
              <div className='border-b mx-10 '>
              <CartItem item={item}/>
              </div>
            </div>
          ))}
          {/* Cart bottom with total and clear cart */}
          {/* <div>
            <div onClick={() => clearCart()}>
              <p>Clear Cart</p>
            </div>
          </div> */}
         </div>
          <div className='uppercase  my-10 relative text-sm'>
             <div className='flex flex-col gap-1 bg-gray-50 rounded-xl border p-5 w-[20%] s:w-[400px] sm:w-[400px] md:fixed lg:fixed xl:fixed'>
             <div>Cart Summary</div>
             <div>Item's total ({amount})</div>
             <div className=' flex justify-between'>
              <span className='font-bold'>Total: </span>
              <span>$ {parseFloat(total).toFixed(2)}</span>
              </div>
              <div className='flex flex-col gap-4'>
                <button className='w-full bg-pink-500 h-[40px] rounded-xl'>Checkout $ {parseFloat(total).toFixed(2)}</button>
               <Link to={'/shop'}>
               <button className='w-full bg-red-500 h-[40px] rounded-xl'>Continue Shopping</button>
               </Link>
              </div>
             </div>
            </div>

        </div>
        </section>
      )}

    </div>
  )
};

export default Cart
