import React from 'react'
import Hero from '../../section/hero/hero.section'
import Nav from '../../components/nav/nav.component'
import Work from '../../section/work/work.section'
import ImageSlider from '../../section/imageSlider/imageSlider.section'
import Story from '../../section/story/story.section'

// import Abstract from "../../assets/images/abstract.png";

import "./home.styles.scss"

function Home() {
  return (
    <>
      {/* Sections */}
      <Nav />
      <Hero />
      <Work />
      <ImageSlider />
      <Story />
      {/* Abstract */}
      {/* <img className="abstract abstract1" src={Abstract} alt="" />
      <img className="abstract abstract2" src={Abstract} alt="" />
      <img className="abstract abstract3" src={Abstract} alt="" />
      <img className="abstract abstract4" src={Abstract} alt="" />
      <img className="abstract abstract5" src={Abstract} alt="" />
      <img className="abstract abstract6" src={Abstract} alt="" /> */}

    </>
  );
}

export default Home