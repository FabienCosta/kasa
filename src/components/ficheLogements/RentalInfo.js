import React from "react";
import Star from "./Star";

const RentalInfo = ({ logement }) => {
  const { title, location, tags, host, rating } = logement;
  return (
    <div className="rental">
      <div className="rental-box">
        <h2 className="rental-title">{title}</h2>
        <p className="rental-place">{location}</p>
        <div className="rental-tags">
          {tags.map((tag, index) => (
            <p key={index} className="rental-tag">
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className=" idBox">
        <div className="rental-id">
          <p className="rental-name">{host.name}</p>
          <img className="rental-img" src={host.picture} alt={host.name} />
        </div>
        <Star rank={rating} />
      </div>
    </div>
  );
};

export default RentalInfo;
