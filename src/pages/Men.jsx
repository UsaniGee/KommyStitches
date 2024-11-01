import React, { useContext } from 'react'
import MenHero from '../../public/assets/menhero.jpg'
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Men = () => {
  const {data} = useContext(ProductContext);
  return (
    <div>
       <div className='mb-36 relative'>
        <img className='h-[400px] w-full object-cover  ' src={MenHero} alt="" />
        <div className='md:top-0 absolute top-[90px] s:top-10 left-[60px] s:left-4 s:w-[250px] w-[300px] text-white text-5xl s:text-3xl font-bold '>
       <h1 className='text-8xl s:text-7xl shadow-xl shadow-black'>Shop Men's Wears</h1>
       </div>
      </div>
    <section className=' flex justify-center mt-10 mb-36'>
  <div className="grid grid-cols-4 s:grid-cols-1 w-[90%] items-center justify-center gap-10">
  {data?.map( item => (
       item.category === "men's clothing" ? (
      <div key={item.id} className="flex text-center">
        <div className="">
         <div className=' relative group'>
         <Link to={`/product/${item.id}`}>
         <img
            className="mix-blend-color-burn w-[100%] aspect-square object-contain group-hover:object-cover border shadow-lg group-hover:duration-700 hover:ease-in-out group-hover:scale-110 hover:rounded-none"
            src={item.image}
            alt={item.title || `Image of Clothing`}            
          />
          <div className='bg-blue-100 w-full mt-5 absolute bottom-1 opacity-0 group-hover:opacity-100 transition-all text-xs p-2  rounded-3xl bg-opacity-80'>
            <p>{item.title}</p>
            <p className='mt-1 font-semibold'>${item.price}</p>
          </div>
          </Link>
         </div>
        </div>
      </div>
    ) : null 
  ))}
</div>
  </section>
    </div>
  )
}

export default Men
