import React from 'react'

import "./slider.styles.scss"

import Image1 from "../../assets/images/5A9E6E0E-D57E-4B07-8380-2C153EA98A19.jpeg"
import Image2 from "../../assets/images/7F378B7D-7046-4374-9E7F-C06D1F945CA5.jpeg";
import Image3 from "../../assets/images/96E78F1B-B2C8-4868-8E07-BDC347777B9E.jpeg";
import Image4 from "../../assets/images/C2CF3F61-869B-46FE-BC6B-8A431C407B6F.jpeg";
import Image5 from "../../assets/images/C488A8C3-5EC7-469D-A873-DF32932DAB1E.jpeg";
import NftCard from '../nftCard/nftCard.component';

function Slider({ direction = "leftToRight" }) {

  const SliderData = [
    {
      img: Image1,
      alt:"#001",
      height: "11rem",
    },
    {
      img: Image2,
      alt:"#002",
      height: "11rem",
    },
    {
      img: Image3,
      alt:"#003",
      height: "11rem",
    },
    {
      img: Image4,
      alt:"#004",
      height: "11rem",
    },
    {
      img: Image5,
      alt:"#005",
      height: "11rem",
    },
  ];
  return (
    <div className="SliderContainer bg-white">
      <div className="SC-Slider">
        <div className={`SC-Slide ${direction}`}>
          {SliderData.map((preImg, index) => {
            return (
              <span key={index}>
                <NftCard
                  image={preImg.img}
                  name={preImg.alt}
                  style={{ height: preImg.height }}
                />
              </span>
            );
          })}
        </div>
        <div className={`SC-Slide ${direction}`}>
          {SliderData.map((preImg, index) => {
            return (
              <span key={index}>
                <NftCard
                  image={preImg.img}
                  name={preImg.alt}
                  style={{ height: preImg.height }}
                />
              </span>
            );
          })}
        </div>
        <div className={`SC-Slide ${direction}`}>
          {SliderData.map((preImg, index) => {
            return (
              <span key={index}>
                <NftCard
                  image={preImg.img}
                  name={preImg.alt}
                  style={{ height: preImg.height }}
                />
              </span>
            );
          })}
        </div>
        <div className={`SC-Slide ${direction}`}>
          {SliderData.map((preImg, index) => {
            return (
              <span key={index}>
                <NftCard
                  image={preImg.img}
                  name={preImg.alt}
                  style={{ height: preImg.height }}
                />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Slider