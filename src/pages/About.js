import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import dataCollapse from "../data/collapses.json";

const About = () => {
  return (
    <div>
      <Header />
      <div className="collapse-banner"></div>
      {dataCollapse.map((item, index) => {
        return <Collapse key={index} data={dataCollapse[index]} />;
      })}
      <Footer />
    </div>
  );
};

export default About;
