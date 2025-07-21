import React, { useState, useEffect } from 'react';
import offers from '@assets/images/offers.png';
import taste from '@assets/images/taste.png';
import { Navigate } from 'react-router-dom';

export default function Screen() {
  const images = [offers, taste];
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  Navigate('/Home')
  const nextSlide = () => {
    setFade(false); // Start fade-out
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(true); // Fade-in new image
    }, 100); // Short fade out time
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  },);

  return (
    <div className="relative w-full overflow-hidden h-96 bg-black">
      <img
        src={images[current]}
        alt="Slide"
        className={`absolute w-150 sm:w-200 md:w-300 lg:w-370 max-h-full h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {/* {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === current ? 'bg-gray-400' : 'bg-yellow-400'}`}
            onClick={() => {
              setFade(false);
              setTimeout(() => {
                setCurrent(index);
                setFade(true);
              }, 100);
            }}
          ></button>
        ))} */}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-400 hover:bg-amber-600 p-2 rounded-full"
      >
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeWidth="2" d="M5 1L1 5l4 4" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-400 hover:bg-amber-600 p-2 rounded-full"
      >
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeWidth="2" d="M1 1l4 4-4 4" />
        </svg>
      </button>
    </div>
  );
}
