import React from 'react'
import {Link} from "react-router-dom"

import "./nav.styles.scss"
 
function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="logo">
        <img
          src="https://st2.depositphotos.com/5142301/7567/v/450/depositphotos_75676029-stock-illustration-abstract-sphere-eco-green-logo.jpg"
          alt=""
        />
      </Link>
      <div className="nav_links">
        <Link to={"/"}>About</Link>
        <Link to={"/story"}>The Story</Link>
        <Link to={"/mint"}>Mint</Link>
      </div>
      <div className="walletBtnContainer">
        <button className="defaultBtn">Connect</button>
      </div>
    </div>
  );
}

export default Nav