import React from "react";
import Cabin from "../../assets/Cabin.png";
import Cake from "../../assets/cake.png";
import Circus from "../../assets/circus.png";
import Game from "../../assets/game.png";
import Safe from "../../assets/safe.png";
import Submarine from "../../assets/submarine.png";
import DividerCustom from "../Divider/dividerCustome";
export default function Portfolio() {
  return (
    <>
      <div>
        <h2> Portfolio </h2>
        <DividerCustom theme="dark"/>
      </div>
      <div>
        <div>
          <img src={Cabin} />
        </div>
        <div>
          <img src={Cake} />
        </div>
        <div>
          <img src={Circus} />
        </div>
        <div>
          <img src={Game} />
        </div>
        <div>
          <img src={Safe} />
        </div>
        <div>
          <img src={Submarine} />
        </div>
      </div>
    </>
  );
}
