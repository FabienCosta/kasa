import React, { useState } from "react";

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
          {description.title}
        </button>
        {!isDescriptionCollapsed && (
          <div className="col-box-text">{data.description}</div>
        )}
      </div>
      <div className="col-box">
        <button onClick={toggleEquipmentCollapse} className="col-box-button">
          {equipements.title}
        </button>
        {!isEquipmentCollapsed && <div className="col-box-text">{content}</div>}
      </div>
    </div>
  );
};

export default Collaosep;
