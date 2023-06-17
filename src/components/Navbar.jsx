import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/explore">Explore</NavLink>
      <NavLink to="/">Home</NavLink>
    </nav>
  );
};

export default Navbar;
