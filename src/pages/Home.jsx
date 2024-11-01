import React, { useContext } from 'react'
import ImageSlider from '../components/ImageSlider'
import { ProductContext } from '../context/ProductContext'
import Loading from '../components/Loading'
import Banner from '../components/Banner'
import MenCat from '../components/MenCat'
import WomenCat from '../components/WomenCat'
import ComingSoon from '../components/ComingSoon'
import NewsletterBox from '../components/NewsletterBox'


const Home = () => {
  const {isPending, error} = useContext(ProductContext)
  

  if(isPending)
    return <h1 className='flex justify-center items-center h-screen bg-black bg-opacity-55 text-4xl'><Loading /></h1>

  if (error)
    return <h1 className='flex justify-center items-center h-screen'>{error.message}</h1>
  return (
    <div className='bg-transparent'>
      <div>
          <ImageSlider />
      </div>
        <div  >
          <h1 className=' text-center text-xl font-bold w-full p-3 bg-pink-100'>
            <Banner />
          </h1>

{/* MEN'S SECTION */}
 <section>
  <div className='flex'>
    <MenCat />
  </div>
 </section>
{/* WOMEN'S SECTION */}
<section>
    <WomenCat />
  </section>      
      </div>  
      <div className='mt-10'>
        <ComingSoon />
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Home

{/* <div className='' key={items.id}>
<div className='h-[65%]'>
<img className=' mix-blend-color-burn w-[100%] aspect-square object-contain m-auto p-10' src={items.image} alt="" />
</div>
</div>  */}