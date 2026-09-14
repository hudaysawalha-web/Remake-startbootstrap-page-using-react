import React from "react";
import Avatar from "../../assets/avatars.svg";
import { FaStar } from "react-icons/fa";
import DividerCustom from "../Divider/dividerCustome";
import "./Hero.css";

export default function Hero() {
  return (
  <div className="masthead">
    <div className="portfolio-container">
      <img src={Avatar} alt="Avatar" className="masthead-avatar"/>
      <h1 className="masthead-heading">Start BootStrap</h1>
      <DividerCustom/>
      <p className="masthead-subheading">Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </div>
  );
}
