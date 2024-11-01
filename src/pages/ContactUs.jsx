import React from 'react'
import ManOnPhone from '/assets/ManOnPhone.jpg'
import NewsletterBox from '../components/NewsletterBox'

const ContactUs = () => {
  return (
    <div className='h'>
      <div className="text-center text-2xl pt-10 border-t">
        <div className="">CONTACT US</div>
      </div>

      <div className="my-10 flex s:flex-col items-center justify-center gap-10 mb-28">
        <img className='w-full max-w-[480px]' src={ManOnPhone} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-gray-600">Our store</p>
          <p className="text-gray-500">57 Chinda Street <br /> Off Eligbam, Port Harcourt, <br /> Rivers, Nigeria</p>
          <p className="text-gray-500">(+234) 8132755766 <br />admin@kommyscloset.com</p>
          <p className="font-semibold text-gray-600">Careers at Kommy's Closet</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className='w-full border-pink-100 border-[1px] hover:border-none hover:bg-red-100 h-[40px] rounded-xl hover:shadow-xl'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default ContactUs
