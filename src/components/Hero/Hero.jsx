import React from "react";
import Avatar from "../../assets/avatars.svg";
import { FaStar } from "react-icons/fa";

import "./Hero.css";
export default function Hero() {
  return (
  <div className="masthead">
    <div className="portfolio-container">
      <img src={Avatar} alt="Avatar" className="masthead-avatar"/>
      <h1 className="masthead-heading">Start BootStrap</h1>
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <FaStar className="star-icon"/>
        </div>
        <div class="divider-custom-line"></div>
      </div>
      <p className="masthead-subheading">Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </div>
  );
}
