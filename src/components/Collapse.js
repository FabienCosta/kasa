import React from "react";
import collapsesData from "../data/collapses.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
console.log(collapsesData);

const Collapse = () => {
  return (
    <div className="collapse">
      <div className="collapse-banner"></div>
      <div className="collapse-menu">
        {collapsesData.map((collapse, index) => {
          return (
            <div key={index} className="collapse-box">
              {collapse.title}
              <FontAwesomeIcon icon={faChevronUp} className="collapse-icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collapse;
