import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../data/collapses.json";
import Collapsed from "../components/ficheLogements/Collapsed";
import Banner from "../components/Banner";
import imgBanner from "../assets/kalen-emsley.png";

const About = () => {
  return (
    <div>
      <Header />
      <Banner img={imgBanner} />
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
