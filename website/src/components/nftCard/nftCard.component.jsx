import React from 'react'

import "./nftCard.styles.scss"

function NftCard({image , name = "Image #001"}) {
  return (
    <div className="nftCard cornerBorder">
      <div className="imgContainer">
        <img src={image} alt="" />
      </div>
      <h2 className="name">{name}</h2>
    </div>
  );
}

export default NftCard