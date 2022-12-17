import React from 'react'

import "./storyCard.styles.scss"

function StoryCard(
    {number = '01', heading = "heading", para = "para"}
) {
  return (
    <div className="storyCard cornerBorder">
      <h2>{number}</h2>
      <div className="storyCard_content">
        <h3>{heading}</h3>
        <p>{para}</p>
      </div>
    </div>
  );
}

export default StoryCard