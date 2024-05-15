/* eslint-disable array-callback-return */
import React, { useState } from "react";
import letfArrow from "../../assets/arrow_left.png";
import rightArrow from "../../assets/arrow_right.png";

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
        if (index === current) {
          return (
            <div className="slide active" key={index}>
              <img src={slide} alt="slides" className="carrousel-img active" />
            </div>
          );
        }
      })}
      {/* conditions qui verifient si il y a moins d'une img par array et enleve les fleches et le numéro si c'est le cas */}
      {slides.length > 1 && (
        <p className="carrousel-number">
          {current + 1} / {slides.length}
        </p>
      )}
      {slides.length > 1 && (
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
      )}
    </div>
  );
};

export default Carrousel;
