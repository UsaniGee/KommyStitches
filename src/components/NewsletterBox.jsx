import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center my-10'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now! & get 10% off.</p>
        <p>Join our mailing list to receive exclusive discounts, early access to sales, and style tips.</p>

        <form onSubmit={onSubmitHandler} className='w-1/2 s:w-screen s:mx-7 flex items-center gap-3 mx-auto my-6 border rounded-xl border-red-100 pl-3'>
            <input className='w-full s:w-screen s:flex-1 outline-none' type="email" placeholder='Enter your email' required />
            <button className='border-pink-100 border-[1epx] hover:border-none hover:bg-red-300 bg-red-100 text-xs px-10  py-4 rounded-xl hover:shadow-xl' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox
