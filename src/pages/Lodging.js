import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/ficheLogements/Carrousel";
import RentalInfo from "../components/ficheLogements/RentalInfo";
import datalodging from "../data/logements.json";
import Collapsed from "../components/ficheLogements/Collapsed";
import Error404 from "./Error404";

const Lodging = () => {
  // permet de recuperer la bonne fiche par l'id
  const { id } = useParams();
  // ? je recupere la fiche correspondant a l'id dans le fichier json
  const logement = datalodging.find((logement) => logement.id === id);
  // ? si la fiche n'existe pas je renvoi une page 404
  if (!logement) {
    return <Error404 />;
  }
  // ? je map sur les equipements pour les afficher dans une liste
  const equipements = logement.equipments.map((equipement, index) => {
    return <li key={index}>{equipement}</li>;
  });

  return (
    <div>
      <div className="slide">
        <Carrousel slides={logement.pictures} />
      </div>
      <RentalInfo logement={logement} />
      <div className="lodging-box">
        {/* ? je passe data et equipement comme props au composant enfant */}
        <Collapsed data={"Description"} content={logement.description} />
        <Collapsed data={"Equipements"} content={equipements} />
      </div>
    </div>
  );
};

export default Lodging;
