import React from "react";
import { Routes, Route } from "react-router-dom";
import BestSeller from "./components/BestSeller"; // ✅ make sure this path is correct
// import ProductDetails from "./components/ProductDetails"; // ✅ make sure this path is correct

function App() {
  return (
    <Routes>
      <Route path="/" element={<BestSeller />} />
      {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
    </Routes>
  );
}

export default App;
