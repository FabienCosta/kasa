import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

// ? Composant enfant qui prend en props data et content
const Collapsed = ({ data, content }) => {
  // ? Creation d'un state pour gerer l'ouverture et la fermeture
  const [isOpen, setIsOpen] = useState(true);

  // ? Creation d'une fonction qui permet de changer l'etat du state en manipulant le setter
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="col">
      <div className="col-box">
        {/* au clic je passe la function dans le jsx */}
        <button onClick={toggleOpen} className="col-box-button">
          {/* j'affiche les data provenant des props */}
          <span className="col-box-title">{data}</span>

          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            className={`col-box-icon ${isOpen ? "rotate" : ""}`}
          />
        </button>
        {/* quand le hook est open j'affiche une div contenant les infos passer dans la props */}
        <div className={`col-box-text ${!isOpen ? "open" : ""}`}>{content}</div>
      </div>
    </div>
  );
};

export default Collapsed;
