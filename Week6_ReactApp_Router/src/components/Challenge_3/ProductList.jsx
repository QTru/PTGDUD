import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

function RoutingWithNotFound() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>|<Link to="/products">Products</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutingWithNotFound;
