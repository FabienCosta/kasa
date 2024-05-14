import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Star = ({ rank }) => {
  const score = rank;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="stars-box">
      {notes.map((note) =>
        score >= note ? (
          <FontAwesomeIcon
            key={note.toString()}
            className="fullStar"
            icon={faStar}
            alt="star"
          />
        ) : (
          <FontAwesomeIcon
            key={note.toString()}
            className="emptyStar"
            icon={faStar}
            alt="star"
          />
        )
      )}
    </div>
  );
};

export default Star;
