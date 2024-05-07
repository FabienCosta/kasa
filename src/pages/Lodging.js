import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrousel from "../components/ficheLogements/Carrousel";
import RentalInfo from "../components/ficheLogements/RentalInfo";
import { useParams } from "react-router-dom";
import datalodging from "../data/logements.json";
import Collapsed from "../components/Collapsed";

const Lodging = () => {
  // permet de recuperer la bonne fiche par l'id
  const { id } = useParams();
  const logement = datalodging.find((logement) => logement.id === id);
  // ? je map sur les equipements pour les afficher dans une liste
  const equipements = logement.equipments.map((equipement) => {
    return <li>{equipement}</li>;
  });

  return (
    <div>
      <Header />
      <Carrousel slides={logement.pictures} />
      <RentalInfo logement={logement} />
      <div className="lodging-box">
        {/* ? je passe data et equipement comme props au composant enfant */}
        <Collapsed data={"Description"} content={logement.description} />
        <Collapsed data={"Equipements"} content={equipements} />
      </div>
      <Footer />
    </div>
  );
};

export default Lodging;
