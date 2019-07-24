import React from "react";
import {Link} from "react-router-dom";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active nav-link" : "nav-link"} >
     <Link to="/" >Home</Link>
    </li>
    <li className={window.location.pathname === "/About" ? "active nav-link" : "nav-link"} >
      <Link to="/About" >About</Link>
    </li>
    <li className={window.location.pathname === "/Blog" ? "active nav-link" : "nav-link"} >
      <Link to="/Blog" >Blog</Link>
    </li>
    <li className={window.location.pathname === "/Contact" ? "active nav-link" : "nav-link"} >
      <Link to="/Contact" >Contact</Link>
    </li>
  </ul>
);

export default NavTabs;
