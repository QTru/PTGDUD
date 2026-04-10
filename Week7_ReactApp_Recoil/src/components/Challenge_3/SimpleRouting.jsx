import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import { useRecoilValue } from "recoil";
import userState from "../../global_states/userState";

function SimpleRouting() {
  let user = useRecoilValue(userState);

  return (
    <div>
      <BrowserRouter>
        {user.isLoggedIn ? (
          <nav>
            <Link to="home">Home</Link>|<Link to="about">About</Link>|
            <Link to="contact">Contact</Link>|<Link to="logout">Logout</Link>
          </nav>
        ) : (
          <nav></nav>
        )}

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="logout" element={<Logout />} />
          <Route path="" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default SimpleRouting;
