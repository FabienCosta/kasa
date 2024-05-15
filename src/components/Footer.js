import React from "react";
import logoWhite from "../assets/logoWhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerText = `${currentYear} Kasa. All rights reserved`;

  return (
    <footer className="footer">
      <img className="footer-img" src={logoWhite} alt="logo kasa" />
      <p className="footer-text">
        <FontAwesomeIcon icon={faCopyright} /> {footerText}
      </p>
    </footer>
  );
};

export default Footer;
