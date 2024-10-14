import React, { useEffect, useState } from 'react'

const CountDown = () => {
    const [timeLeft, setTimeLeft] = useState(30 * 24 * 60 * 60); 

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

      <p>
        <span>Time left: </span> 
        <span> {days} days,</span>
        <span> {hours} hrs,</span>
        <span> {minutes} mins,</span>
        <span> {seconds} secs</span>   
      </p>
    </div>
  );
  }

export default CountDown
