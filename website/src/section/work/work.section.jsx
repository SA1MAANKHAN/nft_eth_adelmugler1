import React from 'react'
import Infocard from '../../components/infocard/infocard.component'

import "./work.style.scss"

function Work() {
  return (
    <div className="work">
      <h2>HEADING FOR THIS SECTION</h2>
      <div className="infoCardContainer">
        <Infocard />
        <Infocard />
        <Infocard />
        <Infocard />
      </div>
    </div>
  );
}

export default Work