import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add quantity = 1 if not present
    const cartWithQuantities = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    setCart(cartWithQuantities);
  }, []);

  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
      updateLocalStorage(updatedCart);
    }
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h2 className="text-3xl text-yellow-500 mb-6">🛒 Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-400">Cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="p-4 bg-gray-800 rounded-xl shadow-md flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  <p className="text-yellow-400">
                    Price: {item.price} × {item.quantity}
                  </p>
                  <div className="mt-2 flex items-center space-x-2">
                    <button
                      onClick={() => decreaseQuantity(index)}
                      className="bg-yellow-500 text-black px-3 py-1 rounded font-bold"
                    >
                      −
                    </button>
                    <span className="font-bold">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(index)}
                      className="bg-yellow-500 text-black px-3 py-1 rounded font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded"
                  onClick={() => removeFromCart(index)}
                >
                  ❌ Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right text-yellow-400 text-2xl font-bold">
            Subtotal: {subtotal} EGP
          </div>
        </>
      )}
    </div>
  );
}
