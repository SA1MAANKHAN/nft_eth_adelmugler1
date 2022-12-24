import React from "react";

import "./mintHero.styles.scss";

import MintHeroImage from "../../assets/images/mintHero.png";

function MintHero() {
  return (
    <div className="mintHero">
      <div className="mintHero__left">
        <h1>Mint Your OWN!</h1>
        <h2>Welcome to the mint page! Are you ready?</h2>
        <button className="defaultBtn">Connect Wallet</button>
      </div>
      <div className="mintHero__right">
        <img src={MintHeroImage} alt="" />
      </div>
    </div>
  );
}

export default MintHero;
