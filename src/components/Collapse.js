import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ data, id }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="collapse">
      <div className="collapse-menu">
        <button
          key={id}
          className="collapse-box"
          onClick={() => toggleOpen(id)}
        >
          {data.title}
          <FontAwesomeIcon icon={faChevronUp} className="collapse-icon" />
          {openIndex === id && <span className="collapse-text">{data}</span>}
        </button>
      </div>
    </div>
  );

  // return (
  //   <div className="collapse">
  //     <div className="collapse-menu">
  //       {dataCollapse.map((item, index) => {
  //         return (
  //           <button
  //             key={index}
  //             className="collapse-box"
  //             onClick={() => toggleOpen(index)}
  //           >
  //             {item.title}
  //             <FontAwesomeIcon icon={faChevronUp} className="collapse-icon" />
  //             {openIndex === index && (
  //               <span className="collapse-text">{item.content}</span>
  //             )}
  //           </button>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};

export default Collapse;
