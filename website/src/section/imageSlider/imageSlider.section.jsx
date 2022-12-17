import React from 'react'
import Slider from '../../components/slider/slider.component';

import "./imageSlider.styles.scss"

function ImageSlider() {
  return (
    <div className="imageSlider">
      <h2>HOT COLLECTION</h2>
      <Slider direction="leftToRight" />
      <Slider direction="rightToLeft" />
    </div>
  );
}

export default ImageSlider