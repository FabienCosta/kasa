import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Collapsed = ({ data, content }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="col">
      <div className="col-box">
        <button onClick={toggleOpen} className="col-box-button">
          <span className="col-box-title">{data}</span>

          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            className="col-box-icon"
          />
        </button>
        {!isOpen && <div className="col-box-text">{content}</div>}
      </div>

      {/* <div className="col-box">
        <button onClick={toggleEquipmentCollapse} className="col-box-button">
          <span className="col-box-title">{equipements.title}</span>

          <FontAwesomeIcon
            icon={isEquipmentCollapsed ? faChevronUp : faChevronDown}
            className="col-box-icon"
          />
        </button>
        {!isEquipmentCollapsed && <div className="col-box-text">{content}</div>}
      </div> */}
    </div>
  );
};

export default Collapsed;
