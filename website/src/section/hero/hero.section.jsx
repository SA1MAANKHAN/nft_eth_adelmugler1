import React from "react";

import "./hero.styles.scss";

// import Img1 from "../../assets/images/5A9E6E0E-D57E-4B07-8380-2C153EA98A19.jpeg"
// import Img2 from "../../assets/images/7F378B7D-7046-4374-9E7F-C06D1F945CA5.jpeg";
// import Img3 from "../../assets/images/96E78F1B-B2C8-4868-8E07-BDC347777B9E.jpeg";
// import Img4 from "../../assets/images/C2CF3F61-869B-46FE-BC6B-8A431C407B6F.jpeg";
// import Img5 from "../../assets/images/C488A8C3-5EC7-469D-A873-DF32932DAB1E.jpeg";

import Img1 from "../../assets/images/Screenshot_2022-12-03_at_7.51.25_PM-removebg-preview.png";
import Img2 from "../../assets/images/Screenshot_2022-12-03_at_7.50.57_PM-removebg-preview.png";
import Img3 from "../../assets/images/Screenshot_2022-12-03_at_7.49.37_PM-removebg-preview.png";
import Img4 from "../../assets/images/Screenshot_2022-12-03_at_7.51.35_PM-removebg-preview.png";
import Img5 from "../../assets/images/Screenshot_2022-12-03_at_7.51.12_PM-removebg-preview.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-info">
        <h1>EXPLORE NFT COLLECTION</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          temporibus ex dicta vero reprehenderit corporis aliquid molestiae
          maiores soluta quaerat.
        </p>
        <div className="hero-btn">
          <button className="defaultBtn">Connect Wallet</button>
        </div>
      </div>
      <div className="gradient-overlay"></div>
      <div className="hero__background">
        <img src={Img1} className="heroImg heroImg1" alt="" />
        <img src={Img2} className="heroImg heroImg2" alt="" />
        <img src={Img3} className="heroImg heroImg3" alt="" />
        <img src={Img4} className="heroImg heroImg4" alt="" />
        <img src={Img5} className="heroImg heroImg5" alt="" />
      </div>
    </div>
  );
}

export default Hero;
