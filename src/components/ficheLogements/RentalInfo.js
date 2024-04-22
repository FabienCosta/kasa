import React from "react";

const RentalInfo = ({ logements }) => {
  return (
    <div className="rental">
      <div className="rental-box">
        <h2 className="rental-title">cozi loft</h2>
        <p className="rental-place">paris, idf</p>
        <p className="rental-tag">cozy</p>
      </div>
      <div className="rental-box">
        <p className="rental-name">henry dupond</p>
        <p className="rental-stars">5 etoiles</p>
      </div>
    </div>
  );
};

export default RentalInfo;
