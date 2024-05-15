import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  const title = "404";
  const message = "Oups! la page que vous demandez n'existe pas";
  const linkText = "Retourner sur la page d'accueil";

  return (
    <div className="error">
      <h1 className="error-title">{title}</h1>
      <h3 className="error-text">{message}</h3>
      <NavLink to="/" className="error-link">
        {linkText}
      </NavLink>
    </div>
  );
};

export default Error;
