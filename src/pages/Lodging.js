import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrousel from "../components/ficheLogements/Carrousel";
import RentalInfo from "../components/ficheLogements/RentalInfo";
import { useParams } from "react-router-dom";
import datalodging from "../data/logements.json";

const Lodging = () => {
  // permet de recuperer la bonne fiche par l'id
  const { id } = useParams();
  const logement = datalodging.find((logement) => logement.id === id);

  return (
    <div>
      <Header />
      <Carrousel slides={logement.pictures} />
      <RentalInfo logement={logement} />
      <Footer />
    </div>
  );
};

export default Lodging;
