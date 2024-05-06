import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Collapse from "../components/Collapse";
import data from "../data/collapses.json";
import Collapsed from "../components/Collapsed";

const About = () => {
  return (
    <div>
      <Header />
      <div className="collapse-banner"></div>

      <div className="collapse-value">
        {data.map((item, index) => {
          return (
            <Collapsed
              key={index}
              data={data[index].title}
              content={data[index].content}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default About;
