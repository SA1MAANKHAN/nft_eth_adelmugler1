import React from "react";
import StoryCard from "../../components/storyCard/storyCard.component";

import "./story.styles.scss";

function Story() {
  return (  
    <div className="story">
      <div className="story__left">
        <h2>THE STORY</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          harum rem nam, obcaecati soluta consequatur dolores amet sequi illum
          eaque iusto autem sit commodi vitae ratione error atque porro
          necessitatibus!
        </p>
        <div className="stats">
          <div className="stat">
            <h4>Total Items</h4>
            <h2>3422</h2>
          </div>
          <div className="stat">
            <h4>Profiles</h4>
            <h2>+43324</h2>
          </div>
        </div>
        <button className="defaultBtn">Read More</button>
      </div>
      <div className="story__right">
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
    </div>
  );
}

export default Story;
