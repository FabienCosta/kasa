import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import lala from "../data/collapses.json";

const About = () => {
  return (
    <div>
      <Header />
      <Collapse lala={lala} />
      <Footer />
    </div>
  );
};

export default About;
