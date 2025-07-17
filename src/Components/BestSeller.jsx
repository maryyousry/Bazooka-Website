import React from 'react';
import img1 from '@assets/images/img1.png';
import img2 from '@assets/images/img2.png';
import img3 from '@assets/images/img3.png';
import img4 from '@assets/images/img4.png';
import img5 from '@assets/images/img5.png';

const images = [img1, img2, img3, img4, img5];
export default function BestSeller() {
  return (
    <div className="flex w-full h-full bg-gray-100 gap-4 p-4">
      {images.map((img, i) => (
        <div
          key={i}
          className="w-1/4 h-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center"
        >
          <a href="/Home" className="w-full h-full">
            <img
              src={img}
              alt={`Best Seller ${i + 1}`}
              className="rounded-t-lg w-full h-full object-contain"
            />
          </a>
        </div>
      ))}
    </div>
  );
}
