import React from "react";
import "./Header.css"

import { NavLink } from "react-router-dom";

export default function Header () {
  return (
    <div className="header">
      <NavLink to="/">About me</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/it-traning">IT Training</NavLink>    
    </div>
  )
}