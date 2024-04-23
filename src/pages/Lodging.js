import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrousel from "../components/ficheLogements/Carrousel";
import RentalInfo from "../components/ficheLogements/RentalInfo";

const Lodging = () => {
  return (
    <div>
      <Header />
      <Carrousel />
      <RentalInfo />
      <Footer />
    </div>
  );
};

export default Lodging;
