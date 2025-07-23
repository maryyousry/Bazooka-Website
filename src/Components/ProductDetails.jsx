import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [quantity, setQuantity] = useState(0);

  // ✅ Load product
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        if (res.data && res.data.id) {
          setProduct(res.data);

          const cart = JSON.parse(localStorage.getItem("cart")) || [];
          const existing = cart.find((item) => item.id === res.data.id);
          if (existing) {
            setQuantity(existing.quantity || 1);
          }
        } else {
          setError("Product not found.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch product.");
      });
  }, [id]);

  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Add to cart or increase quantity
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      cart[index].quantity = (cart[index].quantity || 1) + 1;
      setQuantity(cart[index].quantity);
    } else {
      cart.push({ ...product, quantity: 1 });
      setQuantity(1);
    }

    updateLocalStorage(cart);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1200);
  };

  // ✅ Decrease quantity or remove
  const handleDecrease = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      if (cart[index].quantity <= 1) {
        cart.splice(index, 1); // ❌ Remove from cart
        setQuantity(0);
      } else {
        cart[index].quantity -= 1;
        setQuantity(cart[index].quantity);
      }
      updateLocalStorage(cart);
    }
  };

  // ✅ Increase quantity
  const handleIncrease = () => {
    handleAddToCart();
  };

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  if (!product) {
    return <div className="text-yellow-400 text-center mt-10">Loading product...</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen px-4 py-10 relative">
      <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Product Image */}
        <div className="lg:w-1/2 bg-gray-800 p-6 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[400px] object-contain rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 p-8 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-yellow-400">{product.name}</h1>
          <p className="text-gray-300 text-lg">{product.description}</p>
          <div className="text-xl font-semibold text-yellow-500">
            Price: <span className="ml-2">{product.price} EGP</span>
          </div>

          {/* Quantity and Add to Cart Button */}
          {quantity > 0 ? (
            <div className="flex items-center space-x-4 justify-center mt-4">
              <button
                onClick={handleDecrease}
                className="bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold"
              >
                −
              </button>
              <span className="font-bold text-xl">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold"
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="mx-auto w-1/2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-xl shadow-lg transition duration-300"
              onClick={handleAddToCart}
            >
              🛒 Add To Cart
            </button>
          )}
        </div>
      </div>

      {/* ✅ Added to cart message */}
      {showMessage && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg animate-bounce transition-all duration-500">
          ✅ Added
        </div>
      )}
    </div>
  );
}
