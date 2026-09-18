import React from "react";
import Cabin from "../../assets/Cabin.png";
import Cake from "../../assets/cake.png";
import Circus from "../../assets/circus.png";
import Game from "../../assets/game.png";
import Safe from "../../assets/safe.png";
import Submarine from "../../assets/submarine.png";
import DividerCustom from "../Divider/dividerCustome";
import "./Porfolio.css";

const portfolioItems = [
  { id: 1, src: Cabin, alt: "Cabin" },
  { id: 2, src: Cake, alt: "Cake" },
  { id: 3, src: Circus, alt: "Circus" },
  { id: 4, src: Game, alt: "Game Controller" },
  { id: 5, src: Safe, alt: "Safe" },
  { id: 6, src: Submarine, alt: "Submarine" },
];

export default function Portfolio() {
  return (
    <section className="portfolio page-section">
      <div className="container">
        <h2>Portfolio</h2>
        <DividerCustom theme="dark" />

        <div className="row justify-content-center">
          {portfolioItems.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto">
                <img src={item.src} alt={item.alt} className="img-fluid" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
