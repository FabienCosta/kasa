import React from "react";
import logoWhite from "../assets/logoWhite.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-img" src={logoWhite} alt="logo kasa" />
      <p>2020 Kasa. All rigths reserved</p>
    </div>
  );
};

export default Footer;
