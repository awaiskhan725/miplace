import React from "react";
import { Link } from "react-router-dom";
import MiPlaceLogo from "../images/Logo-Inverted.png";

import Icon from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { twitter } from "react-icons-kit/fa/twitter";
import { pinterestP } from "react-icons-kit/fa/pinterestP";
import { youtube } from "react-icons-kit/fa/youtube";
import { linkedin } from "react-icons-kit/fa/linkedin";

const icons = [facebook, twitter, pinterestP, youtube, linkedin];

const Footer = () => {
  return (
    <footer className="py-5 px-0">
      <div className="container d-flex justify-content-between">
        <div className="d-flex">
          <Link to="/" className="footer-logo">
            <img src={MiPlaceLogo} alt="" />
          </Link>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          {icons.map((icon, index) => (
            <div key={index} className="social-links">
              <a href="#">
                <Icon icon={icon} size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="disclaimer conatiner text-center p-2 mt-5">
        Disclaimer: This website is for portfolio purpose only, and does not
        contain real data
      </div>
    </footer>
  );
};

export default Footer;
