import React from "react";
import Star from "./Star";

const RentalInfo = ({ logement }) => {
  return (
    <div className="rental">
      <div className="rental-box">
        <h2 className="rental-title">{logement.title}</h2>
        <p className="rental-place">{logement.location}</p>
        <div className="rental-tags">
          {logement.tags.map((tag, index) => (
            <p key={index} className="rental-tag">
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className=" idBox">
        <div className="rental-id">
          <p className="rental-name">{logement.host.name}</p>
          <img
            className="rental-img"
            src={logement.host.picture}
            alt={logement.host.name}
          />
        </div>
        <Star rank={logement.rating} />
      </div>
    </div>
  );
};

export default RentalInfo;
