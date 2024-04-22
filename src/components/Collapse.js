import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ lala }) => {
  return (
    <div className="collapse">
      <div className="collapse-banner"></div>
      <div className="collapse-menu">
        {lala.map((lala, index) => {
          return (
            <button key={index} className="collapse-box">
              {lala.title}
              <FontAwesomeIcon
                icon={faChevronUp}
                className="collapse-icon"
                onClick={() => {
                  console.log("clicked");
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Collapse;
