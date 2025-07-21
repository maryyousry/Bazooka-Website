// src/App.jsx
import React from 'react';
import { Routes, Route , Navigate  } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'; // This includes Screen + BestSeller
import ProductDetails from './components/ProductDetails';
import Cart from "./pages/Cart";
import Menu from './Pages/Menu';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Navigate to="/home" replace />} />

         <Route path="/home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />

        {/* Product details page */}
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />

      </Route>
    </Routes>
  );
}

export default App;
