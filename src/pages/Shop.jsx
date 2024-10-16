import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import MenHero from '../assets/images/menhero.jpg'
import WomenHero from '../assets/images/womenheroo.jpg'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'



const Shop = () => {
  const {data} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext)   

  return (
   <div className=''>
     {/* <ComingSoon /> */}
    <div>
      {/* Men's Catergory */}
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
            <p>{item.title.length > 30 ? item.title.substring(0, 30) + "..." : item.title}</p>
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

  {/* Women's category */}
  <div className='mb-36 relative'> 
    <img className='h-[400px] w-full object-cover' src={WomenHero} alt="" />
    <div className='md:top-0 absolute top-[90px] s:top-5 left-[60px] s:left-4 s:w-[250px] w-[450px] text-white text-5xl s:text-3xl font-bold '>
       <h1 className='text-8xl s:text-6xl shadow-xl shadow-black'>Shop Women's Wears</h1>
       </div>
  </div>
  <section className=' flex justify-center mt-10 mb-36'>
  <div className="grid grid-cols-3 s:grid-cols-1 w-[70%] s:w-[75%] items-center justify-center gap-10">
  {data?.map( item => (
       item.category === "women's clothing" ? (
      <div key={item.id} className="flex text-center">
        <div className="">
         <div className='relative group'>
         <Link to={`/product/${item.id}`}>
         <img
            className="mix-blend-color-burn w-[100%] aspect-square object-contain border group-hover:object-cover shadow-lg group-hover:duration-700 group-hover:ease-in-out group-hover:scale-110 hover:rounded-none"
            src={item.image}
            alt={item.title || `Image of Clothing`}            
          />
           <div className='bg-pink-100 w-full mt-5 absolute bottom-1 opacity-0 bg-opacity-85 text-xs p-2 rounded-3xl group-hover:opacity-100 transition-all'>
            <p>{item.title.length > 10 ? item.title.substring(0, 30) + "..." : item.title}</p>
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
   </div>
  )
}

export default Shop
