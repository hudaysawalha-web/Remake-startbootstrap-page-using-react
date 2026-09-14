import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-content">
          <a className="navbar-brand" href="#home">
            start bootstrap
          </a>
          <div className="navbar-nav ">
            <ul className="navbarResponsive " >
              <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
