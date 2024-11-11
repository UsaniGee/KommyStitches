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
            <BtnStyled Name='Shop Now' BtnStyle='bg-[#D9D9D9] font-semibold rounded-full px-[100px] s:px-0 s:w-[240px] s:h-[60px] lg:w-1/2 text-2xl mt-3 shadow-xl'/>
        </NavLink>
        </div>
        </div>
        </div>
      ) : (
        <section className='h-[68vh] s:h-full'>
        <div className='flex s:flex-col sm:flex-col mx-20 s:mx-0 gap-5 s:items-center sm:items-center'>
        <div className='bg-gray-50 my-10 s:my-0 border rounded-lg w-[80%] s:w-[100%] '>
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

         {/* Cart Summary */}
          <div className='uppercase  my-10 relative text-sm'>
             <div className='flex flex-col gap-1 bg-gray-50 rounded-xl border p-5 w-[20%] s:w-fit sm:w-[400px] md:fixed lg:fixed xl:fixed'>
             <div className='mb-4 font-bold'>Cart Summary</div>
             <div className='flex justify-between'>
              <div>Item(s) total </div>
              <div>({amount})</div>
              </div>
             <div className='flex justify-between'>
              <span className='font-bold'>Total: </span>
              <span className='font-medium'>${parseFloat(total).toFixed(2)}</span>
              </div>
              <div className='normal-case italic text-center text-gray-500'>
                Total does not include shipping.
              </div>
              <div className='flex flex-col gap-4 '>
               <Link to={'/placeOrder'}>
               <button className='w-full bg-pink-200 h-[40px] rounded-xl text-[11px] uppercase font-bold shadow-xl'>Proceed  to Checkout (${parseFloat(total).toFixed(2)})</button>
               </Link>
               <Link to={'/shop'}>
               <button className='w-full border-pink-100 border-[2px] hover:border-none hover:bg-red-100 h-[40px] rounded-xl hover:shadow-xl'>Continue Shopping</button>
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
