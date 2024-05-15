import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const HeaderLink = ({ to, children }) => (
  <NavLink to={to} className={(nav) => (nav.isActive ? "nav-active" : "")}>
    <li className="header-link">{children}</li>
  </NavLink>
);

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo kasa" className="header-logo" />
      <ul className="header-links">
        <HeaderLink to="/">Accueil</HeaderLink>
        <HeaderLink to="/about">A Propos</HeaderLink>
      </ul>
    </div>
  );
};

export default Header;
