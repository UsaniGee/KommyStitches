import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'



const MenCat = () => {
const {data} = useContext(ProductContext)
  return (
    <section className=''>
       <div className='flex mt-20 mb-10 justify-center'>
    <h1 className='p-2 text-xl italic text-center '>MEN'S BESTSELLER </h1>
  </div>
  <section className=' flex justify-center '>
  <div className="grid grid-cols-3 s:grid-cols-1 w-[75%] items-center justify-center gap-10">
  {data.slice(1).map( item => (
       item.category === "men's clothing" ? (
      <div key={item.id} className="flex text-center">
        <div className="">
         <div className='relative group'>
        <Link to={`/product/${item.id}`}>
        <img
            className="mix-blend-color-burn w-[100%] aspect-square object-contain border shadow-lg group-hover:duration-700 group-hover:transition-all hover:ease-in-out group-hover:scale-110"
            src={item.image}
            alt={item.title || `Image of Clothing`}            
          />
          
           <div
            className='bg-blue-100 w-full p-3 rounded-3xl text-xs absolute bottom-1 opacity-0 group-hover:opacity-100 transition-all hover:duration-700 hover:transition-all bg-opacity-80 hover:ease-in-out'>
              <p >{item.title}</p>
                <p className='mt-2 font-semibold'>${item.price}</p>
            </div>
        </Link>
           <p className='bg-blue-100 w-[80px] absolute -top-2 group-hover:-top-6 -right-5 group-hover:-right-7 hover:duration-700 hover:transition-all hover:ease-in-out group-hover:scale-110 rounded-3xl'>10% off</p>
         </div>
        </div>
      </div>
    ) : null 
  ))}
</div>
  </section>
  <Link to={'men'}>
    <p className='hover:underline hover:text-blue-500 italic text-right  mr-20 mt-10'>View all...</p>
  </Link>
    </section>
  )
}

export default MenCat
