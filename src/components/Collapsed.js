import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Collaosep = ({ data, content, description, equipements }) => {
  const [isDescriptionCollapsed, setIsDescriptionCollapsed] = useState(true);
  const [isEquipmentCollapsed, setIsEquipmentCollapsed] = useState(true);

  const toggleDescriptionCollapse = () => {
    setIsDescriptionCollapsed(!isDescriptionCollapsed);
  };

  const toggleEquipmentCollapse = () => {
    setIsEquipmentCollapsed(!isEquipmentCollapsed);
  };

  return (
    <div className="col">
      <div className="col-box">
        <button onClick={toggleDescriptionCollapse} className="col-box-button">
          <span className="col-box-title">{description.title}</span>

          <FontAwesomeIcon
            icon={isDescriptionCollapsed ? faChevronUp : faChevronDown}
            className="col-box-icon"
          />
        </button>
        {!isDescriptionCollapsed && (
          <div className="col-box-text">{data.description}</div>
        )}
      </div>
      <div className="col-box">
        <button onClick={toggleEquipmentCollapse} className="col-box-button">
          <span className="col-box-title">{equipements.title}</span>

          <FontAwesomeIcon
            icon={isEquipmentCollapsed ? faChevronUp : faChevronDown}
            className="col-box-icon"
          />
        </button>
        {!isEquipmentCollapsed && <div className="col-box-text">{content}</div>}
      </div>
    </div>
  );
};

export default Collaosep;
