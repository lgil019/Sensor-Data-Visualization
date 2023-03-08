import './../index.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {

  return(

    <nav className='navbar'>
      <div className = "navbar-container"> 
        <ul className = "navbar-menu">
          <li><Link className = "navbar_links" to="/pages">Home</Link></li>
          <li><NavLink className = "navbar_links" to="/study/studyList">Studies</NavLink></li>
          <li><NavLink className = "navbar_links" to="/">Login</NavLink></li>
        </ul>
      </div>
 </nav>  
  )
}