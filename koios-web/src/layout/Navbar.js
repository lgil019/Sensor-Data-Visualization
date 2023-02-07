import './../index.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {

  return(

    <nav className='navbar'>
    <div className = "navbar-container"> 
    <ul className = "navbar-menu">
     <li><Link to="/pages">Home</Link></li>
     <li><NavLink to="/surveyData">Surveys</NavLink></li>
    </ul>
   </div>
 </nav>  
  )
}