import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

// ? je cree un composant enfant qui prend en props data et content et qui affiche data et content en fonction de l'etat du state isOpen
const Collapsed = ({ data, content }) => {
  // ? je cree un state pour gerer l'ouverture et la fermeture du composant enfant en fonction de l'etat du state isOpen qui est true par defaut
  const [isOpen, setIsOpen] = useState(true);
  // ? je cree une fonction qui permet de changer l'etat du state isOpen en fonction de l'etat actuel de isOpen
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
    </div>
  );
};

export default Collapsed;
