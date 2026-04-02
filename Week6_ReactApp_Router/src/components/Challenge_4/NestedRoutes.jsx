import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Orders from "./Orders";
import Settings from "./Settings";

function NestedRoutes() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>|<Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default NestedRoutes;
