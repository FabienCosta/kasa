import React, { useState } from "react";
import letfArrow from "../../assets/arrow_left.png";
import rightArrow from "../../assets/arrow_right.png";
// ! bien relire et comprendre le code generer par le prof
const Carrousel = ({ slides }) => {
  const lenght = slides.length;
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="carrousel">
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide} alt="slides" className="carrousel-img" />
            )}
          </div>
        );
      })}
      <div className="carrousel-arrow">
        <img
          src={letfArrow}
          alt="arrow left"
          onClick={prevSlide}
          className="carrousel-arrow-leftArrow"
        />
        <img
          src={rightArrow}
          alt="arrow right"
          onClick={nextSlide}
          className="carrousel-arrow-rightArrow"
        />
      </div>
    </div>
  );
};

export default Carrousel;
