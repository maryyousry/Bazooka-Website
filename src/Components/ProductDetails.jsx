// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/products/${id}`)
//       .then((res) => setProduct(res.data))
//       .catch((err) => console.error(err));
//   }, [id]);

//   if (!product) return <div className="text-white p-4">Loading...</div>;

//   return (
//     <div className="text-white p-4 max-w-3xl mx-auto bg-black min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
//       <img src={product.image} alt={product.name} className="w-full mb-4 rounded" />
//       <p className="mb-2">{product.description}</p>
//       <p className="font-semibold">{product.price}</p>
//     </div>
//   );
// }
