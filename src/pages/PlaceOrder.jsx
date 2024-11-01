import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const PlaceOrder = () => {
    const {amount, total} = useContext(CartContext)
    const [method, setMethod] = useState('cod')
  return (
    <div className='flex s:flex-col gap-4 pt-5 s:pt-14 min-h-[80vh] border-t mx-[100px]'>
      {/* -----------------left side----------- */}
      <div className='flex flex-col gap-4 w-full s:max-w-[480px] ' >

        <div className='text-xl s:text-2xl my-3'>
            <div className='mb-5 font-bold'>DELIVERY INFORMATION</div>
            <div className='flex gap-3'>
                <input className='border border-gray-300 rounded py-1.5 px-3 outline-none w-full mb-4 ' type="text" placeholder='First name'/>
                <input className='border border-gray-300 rounded py-1.5 px-3 outline-none w-full mb-4 ' type="text" placeholder='Last name'/>
            </div>
                <input className='border border-gray-300 rounded py-1.5 px-3 outline-none w-full mb-4 ' type="email" placeholder='Email address'/>
                <input className='border border-gray-300 rounded py-1.5 px-3 outline-none w-full mb-4 ' type="text" placeholder='Street'/>
            <div className='flex gap-3'>
                <input className='border border-gray-300 rounded py-1.5 px-3 outline-none w-full mb-4 ' type="text" placeholder='City'/>
                <input className='border border-gray-300 rounded py-1.5 px-3 outline-none w-full mb-4 ' type="text" placeholder='State'/>
            </div>
            <div className='flex gap-3'>
                <input className='border border-gray-300 rounded py-1.5 px-3 outline-none w-full mb-4 ' type="number" placeholder='Zipcode'/>
                <input className='border border-gray-300 rounded py-1.5 px-3 outline-none w-full mb-4 ' type="text" placeholder='Country'/>
            </div>
            <input className='border border-gray-300 rounded py-1.5 px-3 outline-none w-full mb-4 ' type="number" placeholder='Phone'/>
        </div>

      </div>

      {/* ---------Right Side------- */}
      <div className='mt-8 w-full'>
        
        <div className='uppercase text-sm'>
             <div className='flex flex-col gap-1  rounded-xl  p-10  '>
             <div className='mb-4 font-bold border-b'>Cart Summary</div>
             <div className='flex justify-between'>
              <div>Item(s) total </div>
              <div>({amount})</div>
              </div>
             <div className='flex justify-between'>
              <div>Shipping fee </div>
              <div className=' text-xs uppercase font-bold '>${parseFloat(total / 100 * 5).toFixed(2)}</div>
              </div>
              
             <div className=' flex justify-between'>
              <span className='font-bold'>Total: </span>
              <span className='font-medium'>${parseFloat(total + (total / 100 * 5)).toFixed(2)}</span>
              </div>

              {/* Payment method */}
              <div className='mt-12 font-bold'>
                <div>PAYMENT METHOD</div>

                {/* Payment method selection */}
                <div className='flex gap-3 s:flex-col mt-5'>
                    <div onClick={()=>setMethod('kommypay')} className='flex items-center gap-3 border p-2 cursor-pointer '>
                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "kommypay" ? "bg-green-500" : ""}`}></p>
                        <p className='text-gray-500 text-xs font-medium '>KommyPay</p>                        
                    </div>
                    <div onClick={()=>setMethod('paystack')} className='flex items-center gap-3 border p-2 cursor-pointer '>
                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "paystack" ? "bg-green-500" : ""}`}></p>
                        <p className='text-gray-500 text-xs font-medium '>PayStack</p>                        
                    </div>
                    <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 cursor-pointer '>
                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-500" : ""}`}></p>
                        <p className='text-gray-500 text-xs font-medium '>CASH ON DELIVERY</p>                        
                    </div>

                </div>
            </div>

            {/* Place Order */}
           <Link to={'/order'}>
           <div className='w-full text-end mt-8'>
                <button className='w-full border-pink-100 border-[2px] hover:border-none hover:bg-red-100 h-[40px] rounded-xl hover:shadow-xl'>PLACE ORDER</button>
            </div>
           </Link>
             
             </div>
             
            </div>

           
        
      </div>
    </div>
  )
}

export default PlaceOrder
