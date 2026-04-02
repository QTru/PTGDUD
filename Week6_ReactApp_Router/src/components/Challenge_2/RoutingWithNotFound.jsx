import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";

function RoutingWithNotFound() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>|<Link to="/about">About</Link>|
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutingWithNotFound;
