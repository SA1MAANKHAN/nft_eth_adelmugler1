import React from "react";

import "./mintHero.styles.scss";

import MintHeroImage from "../../assets/images/mintHero.png";

function MintHero() {
  return (
    <div className="mintHero">
      <div className="mintHero__left">
        <h1>Super NFT</h1>
        <h2>MarketPlace</h2>
        <button className="defaultBtn">Connect Wallet</button>
      </div>
      <div className="mintHero__right">
        <img src={MintHeroImage} alt="" />
      </div>
    </div>
  );
}

export default MintHero;
