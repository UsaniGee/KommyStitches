import React from 'react';
import Ladies from '../assets/images/Ladies.png'
import KidsMix from '../assets/images/Robeee.png'
import KidBlue from '../assets/images/KidBluePj.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/effect-flip'
import 'swiper/css/pagination'
// import 'swiper/css/navigation';

// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import BtnStyled from './BtnStyled';

const ImageSlider = () => {
  return (
    <div >
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // effect={'flip'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[70vh] s:h-[50vh] flex  hidden:bg-[#D9A689]  "
      >
        <div >         
            <SwiperSlide className='flex justify-center s:justify-center  lg:justify-end xl:justify-end 2xl:justify-end bg-[#734E38] bg-opacity-15'>
            <div className='flex flex-col justify-center gap-3 py-24 px-14 h-full s:hidden sm:hidden md:hidden  w-1/2 text-[#D9A689]'>
                <h1 className='text-5xl font-bold s:hidden sm:hidden md:hidden' >
                  Roses Are Red, Robes Are Rejuvenating
                </h1>
                <h2 className='text-3xl font-semibold '>Relax and Recharge</h2>
                <h3 className='italic '> 
                    "Our robes are designed to help you relax and rejuvenate after a long day. With their soft fabrics and luxurious feel, these robes provide the perfect escape from the stresses of everyday life."
                  </h3>
                  <NavLink to='shop'>
                    <BtnStyled Name='Shop Now' BtnStyle='bg-[#D9D9D9] text-[#D9A689] font-semibold rounded-full w-1/3 lg:w-1/2 p-3 text-2xl mt-10  shadow-xl'/>
                  </NavLink>
              </div>
              <img className='object-contain md:object-contain md:mx-5  s:object-contain s:h-[50vh] p-10   lg:w-1/2 xl:w-1/2' src={KidsMix} alt=""  />
              </SwiperSlide>
            <SwiperSlide className='flex justify-center  lg:justify-end xl:justify-end 2xl:justify-end bg-[#32B8E7] bg-opacity-15 '>
            <div className='flex flex-col justify-center gap-5 p-16 h-full s:hidden sm:hidden md:hidden  w-1/2 text-[#40271E]'>
                <h1 className='text-5xl font-bold s:hidden sm:hidden md:hidden' >
                Your Favorite Pair of Pajamas
                </h1>
                <h2 className='text-3xl font-semibold'> Find Your Perfect Fit</h2>
                <h3 className='italic'> 
                        "Discover your new favorite pair of pajamas from our extensive collection. We have styles to suit every taste, from classic to trendy, ensuring you find the perfect fit and feel."
                  </h3>
                  <NavLink to='shop'>
                    <BtnStyled Name='Shop Now' BtnStyle='bg-[#D9D9D9] font-semibold rounded-full w-1/3 lg:w-1/2 p-3 text-2xl mt-10  shadow-xl'/>
                  </NavLink>
              </div>
              <img className='object-contain sm:h-[650px] md:h-[950px] lg:h-[850px] xl:h-[600px] w-[600px] md:object-contain md:mx-5  s:object-contain s:h-[450px] p-14 lg:w-1/2 xl:w-1/2 ' src={Ladies} alt=""  />            
            </SwiperSlide> 
            <SwiperSlide className='flex justify-center  lg:justify-end xl:justify-end 2xl:justify-end bg-[#eea9bb] bg-opacity-15 '>
            <div className='flex flex-col justify-center gap-5 p-16 h-full s:hidden sm:hidden md:hidden  w-1/2'>
                <h1 className='text-5xl s:hidden sm:hidden md:hidden font-bold' >
                  Pajamas That Pamper
                </h1>
                <h2 className='font-semibold text-3xl'> Indulge in Luxury</h2>
                <h3 className='italic'> 
                  Treat yourself to our premium pajama sets, designed to pamper and relax. With attention to detail and exceptional craftsmanship, these pajamas offer unparalleled comfort and style.
                  </h3>
                  <NavLink to='shop'>
                    <BtnStyled Name='Shop Now' BtnStyle='bg-[#D9D9D9] font-semibold rounded-full w-1/3 lg:w-1/3 text-2xl mt-10  shadow-xl'/>
                  </NavLink>
              </div>
              <img className='object-contain md:object-contain md:mx-5  s:object-contain s:h-[50vh] p-14  lg:w-1/2 xl:w-1/2  ' src={KidBlue} alt=""  />
              </SwiperSlide>
        </div>
      </Swiper>
    </div>
  )
}

export default ImageSlider
