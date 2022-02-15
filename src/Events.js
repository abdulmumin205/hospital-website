import React, { useEffect, useState } from "react";
import { pictures } from "./Data";

const Events = () => {
  const [overlay, setOverlay] = useState(null);

  const toggle = (e) => {
    e.preventDefault();
    let target = e ? parseInt(e.currentTarget.id) : null;
    setOverlay(target);
  };

  return (
    <div className="events-container" id="events">
      <h1 className="headline">events</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        saepe?
      </p>

      <div className="event-items" onMouseLeave={() => setOverlay(!overlay)}>
        {pictures.map((pic) => {
          const { id, image, text, data } = pic;

          return (
            <div key={id} id={id} className="events" onMouseOver={toggle}>
              <img src={image} alt="event-image" />
              <div className={`${id === overlay ? "overlay show" : "overlay"}`}>
                {/* <div className="overlay"> */}
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
