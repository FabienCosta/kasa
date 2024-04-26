import React from "react";
import fullStar from "../../assets/starRempli.png";
import emptyStar from "../../assets/starVide.png";

const Star = ({ rank }) => {
  const score = rank;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="rate-contenair">
      {notes.map((note) =>
        score >= note ? (
          <img
            key={note.toString()}
            className="etoile"
            src={fullStar}
            alt="star"
          />
        ) : (
          <img
            key={note.toString()}
            className="etoile"
            src={emptyStar}
            alt="star"
          />
        )
      )}
    </div>
  );
};

export default Star;
