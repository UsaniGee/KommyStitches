import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { ProductContext } from '../context/ProductContext'
import { FaCartPlus } from 'react-icons/fa'
import { TbStar, TbStarFilled } from 'react-icons/tb'

const ProductDetails = () => {
  const {id} = useParams();
  const {data} = useContext(ProductContext)
  const {addToCart} = useContext(CartContext)
  const [isAddedToCart, setIsAddedToCart ] = useState(false)
  const product = data?.find(item => {
    return item.id === parseInt(id)
  })
  
  if (!product) {
    return (
      <div className='h-screen flex justify-center items-center'>
        Loading
      </div>
    )
  }
  const {image, title, price, description} = product
  const handleAddToCart = () => {
    addToCart(product, product.id);
    setIsAddedToCart(true)
  }
  return (
    <div className='h-full pt-20 pb-12 lg:py-32 flex  items-center justify-center'>
      <div className=''>
      <div className='flex lg:flex-row s:flex-col  justify-center items-center gap-20'>
        {/* Image */}
       <div className='flex flex-1 justify-center items-center mb-8 s:mb-0 lg:mb-0'>
       <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
       </div>
       {/* Content and add button */}
      <div className='flex flex-col gap-5 mx-['>
         {/* Text */}
       
        <div className='text-2xl font-medium w-[500px] s:w-[300px] s:mx-[100px]'>
          {title}
        </div>
        {/* rating */}
        <div className='flex text-red-200 items-center text-xl s:mx-[100px]'>
          <TbStarFilled />
          <TbStarFilled />
          <TbStarFilled />
          <TbStarFilled />
          <TbStar />
          <div className='pl-4'>(100)</div>
        </div>

        <div className='w-[430px] s:w-auto capitalize s:mx-[100px]'>
          {/* Price */}
          <div className='font-bold text-2xl'>
            ${price}
          </div>
          <div className='font-bold my-5 '>
            Product details
          </div>
          <div className='italic text-gray-400 '>
          {description}
          </div>
        </div>
      
         <div className='w-[550px] flex justify-center mt-4 border-b-[1px]'>
          {/* AddToCart Button */}
        {isAddedToCart ? (
          <button className="disabled:opacity-50 cursor-not-allowed flex items-center h-[50px] bg-green-100 rounded-full px-[50px] gap-2 uppercase font-bold mb-5">
          <FaCartPlus /> Added to Cart
        </button>
        ) : (
        
        <button className='flex items-center h-[50px] bg-pink-100 rounded-full px-[50px] gap-2 uppercase font-bold mb-5' onClick={handleAddToCart}><FaCartPlus /> add to cart</button>

        )}
         </div>

         <div className='text-gray-400 text-sm s:w-auto s:mx-[100px]'>
          <p>100% Original product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7days.</p>
         </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default ProductDetails

