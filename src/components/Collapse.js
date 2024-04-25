import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ lala }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="collapse">
      <div className="collapse-banner"></div>
      <div className="collapse-menu">
        {lala.map((item, index) => {
          return (
            <button
              key={index}
              className="collapse-box"
              onClick={() => toggleOpen(index)}
            >
              {item.title}
              <FontAwesomeIcon icon={faChevronUp} className="collapse-icon" />
              {openIndex === index && (
                <span className="collapse-text">{item.content}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Collapse;
