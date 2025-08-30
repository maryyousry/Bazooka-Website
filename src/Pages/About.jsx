import React from "react";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8 border-b-4 border-yellow-400 inline-block">
          About Bazooka
        </h1>

        {/* Intro */}
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          Welcome to <span className="text-yellow-400 font-semibold">Bazooka</span> – your go-to destination for the crispiest, juiciest, most flavor-packed fried chicken in town!
          Since our founding, Bazooka has been all about bold taste, top quality, and fast service.
        </p>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">🍗 Signature Fried Chicken</h2>
            <p>Marinated in our secret spices, hand-breaded daily, and fried to golden perfection. A bite you'll never forget.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">🚚 Fast Delivery</h2>
            <p>Freshness at your doorstep! We deliver hot meals fast, whether you're at home, work, or anywhere in between.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">🍟 Full Menu</h2>
            <p>Not just chicken — enjoy fries, burgers, wings, sauces, desserts, and refreshing drinks for the full Bazooka experience.</p>
          </div>
        </div>

        {/* Outro */}
        <p className="text-lg mt-12 leading-relaxed">
          At Bazooka, we're more than just a restaurant — we're a community of chicken lovers! Visit us today or order online to taste the **real crunch**.
        </p>
      </div>
    </div>
  );
}
