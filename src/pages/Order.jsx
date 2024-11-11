import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const Order = () => {
    const {data} = useContext(ProductContext)

  return (
    <div className='h-screen border-t pt-16 s:pt-5 mx-[100px] s:mx-[10px]'>
        <div className='text-2xl'>
            <div>
                MY ORDERS
            </div>

            <div>
                {
                    data?.slice(1, 4).map((item) => (
                        <div key={item.id} className='py-4 border-t border-b text-gray-700 flex md:flex-row md: items-center md: justify-between s:justify-between gap-4 s:gap-2 s:mx-1'>
                            <div className='flex items-start s:items-center gap-6 text-sm '>
                               <div>
                                <img className='w-16 s:w-20 s:mb-10' src={item.image} alt="" />
                               </div>
                                <div className='s:w-[170px] s:text-xs'>
                                    <p className='s:text-base font-medium'>{item.title}</p>
                                    <div className='flex s:flex-col items-center s:items-start gap-3 s:text-xs s:gap-0 mt-2 text-base text-gray-700'>
                                        <p>${item.price}</p>
                                        <p>Quatity: {1}</p>
                                    </div>
                                    <p className='mt-2'>Date: <span className="text-gray-500">1st, Nov, 2024</span></p>
                                </div>
                                
                            </div>
                            <div className="w-1/2 flex justify-between s:flex-col s:gap-5">
                                <div className="flex items-center gap-2">
                                    <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                                    <p className="text-sm s:text-xs">Ready to ship</p>
                                </div>
                                <button className="hover:bg-gray-200 border px-4 s:px-0 py-2 text-sm s:text-xs font-medium rounded-sm">Track Order</button>
                            </div>

                            
                        </div>
                    ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default Order
