import React, { useState } from "react";

const Collaosep = ({ data, equipement, id }) => {
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
          Description
        </button>
        {!isDescriptionCollapsed && (
          <div className="col-box-text">{data.description}</div>
        )}
      </div>
      <div className="col-box">
        <button onClick={toggleEquipmentCollapse} className="col-box-button">
          Equipements
        </button>
        {!isEquipmentCollapsed && (
          <div className="col-box-text">{equipement}</div>
        )}
      </div>
    </div>
  );
};

export default Collaosep;
