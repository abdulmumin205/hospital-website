import React, { useState } from "react";

import { FaBars, FaPlusSquare } from "react-icons/fa";

import { links } from "./Data";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <p className="logo">
            Pharma <span>Plus</span>
            <span className="icon-logo">
              <FaPlusSquare />
            </span>
          </p>

          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className={`${
            showLinks ? "links-container show-container" : "links-container"
          }`}
        >
          <ul className="links">
            {links.map((item) => {
              const { id, text, url } = item;
              return (
                <li key={id} className="link">
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
