import React from "react";
import a1 from "./images/a1.jpg";
import a2 from "./images/a2.jpg";
import a3 from "./images/a3.jpg";
import a4 from "./images/a4.jpg";

const Services = () => {
  return (
    <div className="services-container" id="services">
      <h1 className="headline">services </h1>
      {/* services */}
      <div className="services-section">
        <div className="services">
          <div className="services-item">
            <img src={a1} alt="item" />
            <h2>consultation</h2>

            <p>
              Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet
              congue. Integer elit imperdiet congue
            </p>
          </div>
        </div>
        {/* end of item */}

        <div className="services">
          <div className="services-item">
            <img src={a2} alt="item" />
            <h2>critical care</h2>

            <p>
              Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet
              congue. Integer elit imperdiet congue
            </p>
          </div>
        </div>
        {/* end of item */}

        <div className="services">
          <div className="services-item">
            <img src={a3} alt="item" />
            <h2>womens care</h2>

            <p>
              Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet
              congue. Integer elit imperdiet congue
            </p>
          </div>
        </div>
        {/* end of item */}

        <div className="services">
          <div className="services-item">
            <img src={a4} alt="item" />
            <h2>childrens care</h2>

            <p>
              Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet
              congue. Integer elit imperdiet congue
            </p>
          </div>
        </div>
        {/* end of item */}
      </div>
    </div>
  );
};

export default Services;
