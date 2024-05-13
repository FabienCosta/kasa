import React from "react";
import data from "../data/collapses.json";
import Collapsed from "../components/ficheLogements/Collapsed";
import Banner from "../components/Banner";
import imgBanner from "../assets/kalen-emsley.png";

const About = () => {
  return (
    <div>
      <Banner img={imgBanner} title={""} styleText={true} />
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
    </div>
  );
};

export default About;
