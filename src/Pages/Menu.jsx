import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export default function Menu() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/menus")
      .then((res) => {
        setMenus(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch menu:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, item];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success(`${item.name} added to cart!`, {
      position: "top-center",
      autoClose: 1200,
    });
  };

  if (loading) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-6 text-center text-yellow-600">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menus.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="text-yellow-600 font-semibold mb-4">{item.price} EGP</p>
            <button
              onClick={() => handleAddToCart(item)}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded-xl shadow-md transition duration-300"
            >
              🛒 Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
