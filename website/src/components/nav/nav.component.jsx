import React from 'react'
import {Link} from "react-router-dom"

import "./nav.styles.scss"
 
function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img
          src="https://st2.depositphotos.com/5142301/7567/v/450/depositphotos_75676029-stock-illustration-abstract-sphere-eco-green-logo.jpg"
          alt=""
        />
      </div>
      <div className="nav_links">
        <Link to={"/"}>One</Link>
        <Link to={"/"}>Two</Link>
        <Link to={"/"}>Three</Link>
        <Link to={"/"}>Four</Link>
      </div>
      <div className="walletBtnContainer">
        <button className="defaultBtn">Connect</button>
      </div>
    </div>
  );
}

export default Nav