import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'
import { PiTagSimpleThin } from "react-icons/pi";



const WomenCat = () => {
const {data} = useContext(ProductContext)
  return (
    <section className=''>
       <div className='flex mt-20 mb-10 justify-center'>
    <h1 className='p-2 text-xl italic text-center '>WOMEN'S BESTSELLER </h1>
  </div>
  <section className=' flex justify-center '>
  <div className="grid grid-cols-3 s:grid-cols-1 w-[75%] items-center justify-center gap-10">
  {data.slice(14, 17).map( item => (
       item.category === "women's clothing" ? (
      <div key={item.id} className="flex text-center">
        <div className="">
         <div className='relative group'>
         <Link to={`/product/${item.id}`}>
         <img
            className="mix-blend-color-burn w-[100%] aspect-square object-contain border shadow-lg  group-hover:duration-700 group-hover:ease-in-out group-hover:scale-110"
            src={item.image}
            alt={item.title || `Image of Clothing`}            
          />
           <div className='bg-pink-100 bg-opacity-80 text-xs p-3 rounded-3xl capitalize w-full backdrop:mt-5 leading-3 absolute bottom-1 opacity-0 group-hover:opacity-100 transition-all'>
            <p>{item.title.length > 10 ? item.title.substring(0, 30) + "..." : item.title}</p>
            <p className='mt-1 font-semibold'>${item.price}</p>
           </div>
          </Link>
          <p className='bg-pink-100 w-[80px] mt- absolute -top-2 group-hover:-top-6 -right-5 group-hover:-right-7 rounded-3xl group-hover:scale-110'>10% off</p>
          {/* <div className='text-7xl absolute  -right-5'>
          <PiTagSimpleThin />
          </div> */}
           
         </div>
        </div>
      </div>
    ) : null 
  ))}
</div>
  </section>
  <Link to={'women'}>
    <p className='hover:underline hover:text-blue-500 italic text-right  mr-20 mt-10'>View all...</p>
  </Link>
    </section>
  )
}

export default WomenCat
