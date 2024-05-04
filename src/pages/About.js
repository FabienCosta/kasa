import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import data from "../data/collapses.json";

const About = () => {
  return (
    <div>
      <Header />
      <div className="collapse-banner"></div>
      {data.map((item, index) => {
        return (
          <Collapse
            key={index}
            data={data[index].title}
            content={data[index].content}
          />
        );
      })}

      <Footer />
    </div>
  );
};

export default About;
