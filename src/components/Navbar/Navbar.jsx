import React from "react";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand-container">
            <a className="navbar-brand" href="#home">
              start bootstrap
            </a>

            <button className="navbar-toggler">
              Menu
            </button>
          </div>
          <div className= "navbar-collapser ">
            <ul className="navbar-list">
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
