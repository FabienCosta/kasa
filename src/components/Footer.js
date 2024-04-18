import React from "react";
import logoWhite from "../assets/logoWhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-img" src={logoWhite} alt="logo kasa" />
      <p>
        <FontAwesomeIcon icon={faCopyright} />
        2020 Kasa. All rigths reserved
      </p>
    </div>
  );
};

export default Footer;
