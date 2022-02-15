import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { sliderData } from "./Data";

const Hero = () => {
  const [people, setPeople] = useState(sliderData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="hero-section">
      {people.map((item, personIndex) => {
        const { id, title, text, url } = item;

        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <div key={id} className={`hero-container ${position} `}>
            <div className={url}>
              <div className="hero-items">
                <h1>{title}</h1>
                <p className="text">{text}</p>
                <div className="btn">
                  <button className="button">read more</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Hero;
