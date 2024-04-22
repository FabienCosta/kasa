import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrousel from "../components/ficheLogements/Carrousel";
import logements from "../data/logements.json";
import RentalInfo from "../components/ficheLogements/RentalInfo";
const Lodging = () => {
  return (
    <div>
      <Header />
      <Carrousel logements={logements} />
      <RentalInfo logements={logements} />
      <Footer />
    </div>
  );
};

export default Lodging;
