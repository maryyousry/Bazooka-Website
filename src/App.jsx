<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import Favorites from "./Components/Favorites";
import Shop from "./Components/Shop";
import Layout from "./Layout/Layout";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      {/* Root goes to Register */}
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* Protected routes with Navbar/Layout */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};
=======
// src/App.jsx
import React from 'react';
import { Routes, Route , Navigate  } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'; // This includes Screen + BestSeller
import ProductDetails from './components/ProductDetails';
import Cart from "./pages/Cart";
import Menu from './Pages/Menu';
import Contact from './Components/Contact';
import About from './Pages/About';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Navigate to="/home" replace />} />

         <Route path="/home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />



        {/* Product details page */}
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />

      </Route>
    </Routes>
  );
}
>>>>>>> fb06b8fcbea303306f935ed731d9d08bfc0fb9af

export default App;
