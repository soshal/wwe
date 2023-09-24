import React from "react";
import logo from "./download.png";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="Your Alternative Text Here" />
      <div className="will">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <ImSearch />
    </nav>
  );
}

export default Header;
