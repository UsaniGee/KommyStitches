import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { ProductContext } from '../context/ProductContext'

const ProductDetails = () => {
  const {id} = useParams();
  const {data} = useContext(ProductContext)
  const {addToCart} = useContext(CartContext)
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
  return (
    <div className='h-full pt-32 pb-12 lg:py-32 flex items-center'>
      <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row items-center'>
        {/* Image */}
       <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
       <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
       </div>
       {/* Text */}
       <div>text</div>
         <div>
          {/* AddToCart Button */}
        <button onClick={() => addToCart(product, product.id )}>add to cart</button>
         </div>
      </div>
      </div>
    </div>
  )
}

export default ProductDetails

