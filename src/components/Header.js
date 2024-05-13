import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo kasa" className="header-logo" />
      <ul className="header-links">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="header-link">Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="header-link">A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
