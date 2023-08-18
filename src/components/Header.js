import React from "react";
import "./Header.css"

import { NavLink } from "react-router-dom";

export default function Header () {
  return (
    <div className="header">
      <NavLink className="links" to="/">About me</NavLink>
      <NavLink className="links" to="/it-traning">IT Training</NavLink>    
      <NavLink className="links" to="/contact">Contact</NavLink>
    </div>
  )
}