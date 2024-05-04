import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapseoo = ({ data, content }) => {
  // console.log(data);
  // console.log(equipement);
  const [openIndex, setOpenIndex] = useState(null);
  const toggleOpen = (index) =>
    setOpenIndex(openIndex === index ? null : index);
  return (
    <div className="collapse-menu">
      <button key={0} className="collapse-box" onClick={() => toggleOpen(0)}>
        {data}
        <FontAwesomeIcon icon={faChevronUp} className="collapse-icon" />
      </button>
      {openIndex === 0 && <div className="collapse-text">{content}</div>}
    </div>
  );
};

export default Collapseoo;
