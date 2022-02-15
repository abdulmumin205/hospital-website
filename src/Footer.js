import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaYoutube,
  FaPinterest,
  FaLinkedin,
  FaSkype,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-address">
          <h2>contact us</h2>
          <p>1th Avenue, New York - United States</p>
          <p>Phone: +22 342 2345 345 | Fax: +22 724</p>
          <p>
            Email: <span> info@example.com</span>
          </p>
          <p>
            Skype: <span> my-company</span>
          </p>
        </div>
        <div className="footer-mail">
          <h2>mailing list</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
            quia?{" "}
          </p>
          <div>
            <form>
              <input type="text" />
              <button>Go</button>
            </form>
          </div>
        </div>
        <div className="footer-i">
          <h2>follow us</h2>
          <div className="footer-icons">
            <span className="i">
              <FaGooglePlus />
            </span>
            <span className="i">
              <FaFacebook />
            </span>

            <span className="i">
              <FaTwitter />
            </span>
            <span className="i">
              <FaYoutube />
            </span>
            <span className="i">
              <FaInstagram />
            </span>
            <span className="i">
              <FaLinkedin />
            </span>
            <span className="i">
              <FaSkype />
            </span>
            <span className="i">
              <FaPinterest />
            </span>
          </div>
        </div>
        <div className="footer-news">
          <h2>latest news</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cum
            laboriosam corrupti officiis deleniti voluptatum voluptate ipsam
            inventore quisquam repudiandae?
          </p>
          <button>get more</button>
        </div>
      </div>

      <div className="copyright">
        <p>
          Copyright 2015 | All Rights Reserved -- created by{" "}
          <span>abdul mumin alidu</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
