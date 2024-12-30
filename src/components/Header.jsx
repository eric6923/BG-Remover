// Header.jsx
import React from "react";
import "./Header.css";
import Logo from '../assets/image.png'

function Header() {
  return (
    <header className="header">
      <div className="logo-title-container">
        <img src={Logo} alt="Logo" className="header-logo" />
        <h1 className="header-title">Remove BG</h1>
      </div>
    </header>
  );
}

export default Header;