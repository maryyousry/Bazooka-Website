// src/Layout/Layout.jsx

import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Outlet /> {/* This renders the nested route like Shop, Cart, etc. */}
      </div>
    </>
  );
};

export default Layout;
