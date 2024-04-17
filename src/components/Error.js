import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1 className="error-title">404</h1>
      <h3 className="error-text">
        Oups! la page que vous demandez n'existe pas
      </h3>
      <NavLink to="/" className="error-link">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
};

export default Error;
