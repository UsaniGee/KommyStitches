import React from 'react'
import AboutUs from '/assets/aboutUs.jpg'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className='mx-[100px] s:mx-6'>
    <div className='text-2xl text-center pt-8 border-t'>
      <div>ABOUT US</div>
    </div>

    <div className="my-10 flex s:flex-col md:flex-row gap-16 items-center justify-center ">
      <img  className="w-full max-w-[450px]" src={AboutUs} alt=""  />
      <div className="flex flex-col justify-center gap-6 w-2/4 s:w-full text-gray-600">
          <p>Kommy's Closet is your go-to destination for stylish and affordable fashion. We're passionate about curating a collection that empowers you to express your unique style. From casual wear to elegant evening attire, we offer a diverse range of clothing and accessories to suit every occasion.</p>

          <p>We believe that everyone deserves to look and feel their best. That's why we carefully select each piece in our collection to ensure it's not only fashionable but also comfortable and high-quality.</p>

          <b>Our Mission</b>

          <p>Our mission is to make fashion accessible to everyone. We believe that looking good shouldn't break the bank. That's why we strive to provide high-quality products at competitive prices. Join us on a journey of style and self-expression.</p>
      </div>
    </div>

    <div className="text-xl py-4">
      <div>WHY CHOOSE US</div>
    </div>

    <div className="flex s:flex-col text-sm mb-20 ">
      <div className="border px-10 s:px-5 py-8 s:py-5 flex flex-col gap-5">
        <b>Quality and Affordability</b>
        <p className='text-gray-600'> We believe that everyone deserves to look their best without breaking the bank. Our commitment to quality and affordability ensures that you get the best value for your money.</p>
      </div>

      <div className="border px-10 s:px-5 py-8 s:py-5 flex flex-col gap-5">
        <b>Unique Style</b>
        <p className='text-gray-600'>Our carefully curated collection features trendy and unique pieces that set you apart from the crowd. We stay ahead of the fashion curve, bringing you the latest styles and trends.</p>
      </div>

      <div className="border px-10 s:px-5 py-8 s:py-5 flex flex-col gap-5">
        <b>Exceptional Customer Service</b>
        <p className='text-gray-600'>We're passionate about providing exceptional customer service. Our friendly and knowledgeable team is always ready to assist you with any questions or concerns.</p>
      </div>
    </div>

    <NewsletterBox />

    </div>
  )
}

export default About
