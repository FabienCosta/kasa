import React from "react";

const Cards = ({ cover, title }) => {
  return (
    <div className="card">
      <div className="cover-gradient"></div>
      <img src={cover} alt="" className="card-img" />
      <p className="card-text">{title}</p>
    </div>
  );
};

export default Cards;
