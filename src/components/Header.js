import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src="../assets/logo.png" alt="logo kasa" className="header-logo" />
      <ul className="header-links">
        <NavLink to="/">
          <li className="header-link">Acceuil</li>
        </NavLink>
        <NavLink to="/about">
          <li className="header-link">A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
