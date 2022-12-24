import React from "react";

import "./storyHero.styles.scss";

import storyHeroImage from "../../assets/images/mintHero.png";

function StoryHero() {
  return (
    <div className="storyHero">
      <div className="storyHero__left">
        <h1>The Story</h1>
        <h2>Our story is like no other</h2>
        <button className="defaultBtn">Connect Wallet</button>
      </div>
      <div className="storyHero__right">
        <img src={storyHeroImage} alt="" />
      </div>
    </div>
  );
}

export default StoryHero;
