import React from "react";
import "./header.css";
import NavBar from "../Navbar/navBar";

const Header = () => {
  return (
    <header class="header-navbar">
      <div className="header">
        <div className="">
          <h1>Moreno construction</h1>
        </div>
        <div className="navbar">
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
