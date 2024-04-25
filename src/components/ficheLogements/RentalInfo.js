import React from "react";

const RentalInfo = ({ logement }) => {
  return (
    <div className="rental">
      <div className="rental-box">
        <h2 className="rental-title">{logement.title}</h2>
        <p className="rental-place">{logement.location}</p>
        {logement.tags.map((tag, index) => (
          <p key={index} className="rental-tag">
            {tag}
          </p>
        ))}
      </div>
      <div className="rental-box bbox">
        <p className="rental-name">{logement.host.name}</p>
        <p className="rental-stars">{logement.rating}</p>
      </div>
    </div>
  );
};

export default RentalInfo;
