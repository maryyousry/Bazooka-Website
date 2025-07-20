// src/App.jsx
import React from 'react';
import { Routes, Route , Navigate  } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'; // This includes Screen + BestSeller
import ProductDetails from './components/ProductDetails';
import Cart from "./pages/Cart";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
              <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Home Route shows Screen + BestSeller */}
         <Route path="/home" element={<Home />} />

        {/* Product details page */}
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />

      </Route>
    </Routes>
  );
}

export default App;
