import React from "react";

const Banner = ({ img, title, styleText }) => {
  return (
    <div className="banner">
      <h2 className={styleText ? "" : "banner-title"}>{title}</h2>
      <img src={img} alt="banniere" className="banner-img" />
    </div>
  );
};

export default Banner;
