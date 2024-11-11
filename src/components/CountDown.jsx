import React, { useEffect, useState } from 'react'

const CountDown = () => {
    const [timeLeft, setTimeLeft] = useState(3 * 24 * 60 * 60); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds
 = timeLeft % 60;

  return (
    <div className=''> 
      <div className='flex gap-[32px] sm:gap-[20px] sm:w-[500px] sm:text-[18px] s:gap-[5px] text-[#503112]'>
        <span className='bg-gradient-to-t from-white to-pink-200 rounded-xl font-bold w-[100px] s:w-[40px] h-[100px] s:h-[50px] border flex flex-col justify-center items-center '> <p>{days}</p>
        <p>Days</p> </span>
        <span className='bg-gradient-to-t from-white to-pink-200 rounded-xl font-bold w-[100px] s:w-[40px] h-[100px] s:h-[50px] border flex flex-col justify-center items-center'> <p>{hours}</p>
        <p>Hours</p> </span>
        <span className='bg-gradient-to-t from-white to-pink-200 rounded-xl font-bold w-[100px] s:w-[40px] h-[100px] s:h-[50px] border flex flex-col justify-center items-center'> <p>{minutes}</p>
        <p>Minutes</p></span>
        <span className='bg-gradient-to-t from-white to-pink-200 rounded-xl font-bold w-[100px] s:w-[40px] h-[100px] s:h-[50px] border flex flex-col justify-center items-center'> <p>{seconds}</p>
        <p className=''>secs</p></span>  
        <span className='bg-gradient-to-t from-white to-pink-200 rounded-xl font-bold w-[100px] s:w-[40px] h-[100px] s:h-[50px] border flex justify-center items-center'> Left</span>  
      </div>
    </div>
  );
  }

export default CountDown
