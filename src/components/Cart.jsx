import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import { FaCartArrowDown } from "react-icons/fa";
import BtnStyled from './BtnStyled';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const {cart, clearCart, total, amount} = useContext(CartContext) 

  return(
    <div className='h-screen m-10'>
     
      {/* Conditional rendering */}

      {cart.length === 0 ? (
        <div className='text-center text-gray-500 h-2/3 flex justify-center items-center flex-col gap-3'> 
        <div className='text-7xl'><FaCartArrowDown /></div>
        <div>Your cart is currently empty</div>
        <div>Browse our categories and discover our best deals!</div>
        <div>
        <NavLink to='/shop'>
            <BtnStyled Name='Shop Now' BtnStyle='bg-[#D9D9D9] font-semibold rounded-full px-[100px] lg:w-1/2 text-2xl mt-3 shadow-xl'/>
        </NavLink>
        </div>
        </div>
      ) : (
        <section>
        <div className='flex s:flex-col mx-20 s:mx-0'>
        <div className='bg-green-50 my-10 border rounded-lg'>
         <div className='border-b py-1 text-xl font-bold'> Cart ({amount})</div>
          {cart.map((item) => (
            <div className='' key={item.id}>
              <div className='border-b mx-10 '>
              <CartItem item={item}/>
              </div>
            </div>
          ))}
          {/* Cart bottom with total and clear cart */}
          <div>
            {/* <div onClick={() => clearCart()}>
              <p>Clear Cart</p>
            </div> */}
          </div>
         </div>
          <div className='uppercase gap-1 w-[35%] bg-slate-600 my-20 mx-10 '>
              <div>
              <span>Total: </span>
              <span>$ {parseFloat(total).toFixed(2)}</span>
              </div>
              <div>
                <button>Checkout</button>
              </div>
            </div>
        </div>
        </section>
      )}

    </div>
  )
};

export default Cart
