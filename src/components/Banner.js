import React from "react";

const Banner = ({ img, title }) => {
  return (
    <div className="banner">
      <h2 className="banner-title">{title}</h2>
      <img src={img} alt="banniere" className="banner-img" />
    </div>
  );
};

export default Banner;
