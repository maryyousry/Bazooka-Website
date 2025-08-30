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

export default App;
