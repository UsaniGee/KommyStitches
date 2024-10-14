import React, { useEffect } from 'react';

const Banner= () => {
  const messages = [
    '10% STUDENT DISCOUNT',
    'FREE STANDARD SHIPPING OVER $75',
    'FREE 30-DAY RETURNS POLICY. *EXCLUSIONS APPLY',
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNextMessage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextMessage, 3000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <section className="flex items-center s:text-sm justify-center flex-col text-center">
      <div className="">
        <span key={currentIndex} className="font-bold">
          {messages[currentIndex]}
        </span>
      </div>
    </section>
  );
};

export default Banner;