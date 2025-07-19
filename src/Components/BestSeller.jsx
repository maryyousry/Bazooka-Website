import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BestSeller() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
      });
  }, []);

  return (
  <div className="bg-black">
    <div className="flex w-full p-7 justify-between items-center">
      <h1 className="text-xl font-bold text-white">Best Seller</h1>
      <p className="text-yellow-500 cursor-pointer">View more</p>
    </div>

    <div className="grid grid-cols-2 items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full h-full rounded-lg shadow-sm flex flex-col items-center"
        >
          <Link href="/home" className="w-full h-full">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-t-lg w-full h-full object-contain"
            />
          </Link>
        </div>
      ))}
    </div>
  </div>
);

}
