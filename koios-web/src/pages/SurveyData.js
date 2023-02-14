import './../index.css';
import React from 'react';
import {useState} from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function SurveyData() {
  return (
    <div className="container">
      <div id="dropdown-basic-button" title="Surveys">
        <li href="#/action-1">Survey 1</li>
        <li href="#/action-2">Survey 2</li>
        <li href="#/action-3">Something else</li>
      </div>  
  
      <div id="dropdown-basic-button2" title="Version">
        <li href="#/action-1">Version 1</li>
        <li href="#/action-2">Version 2</li>
        <li href="#/action-3">Version 3</li>
      </div>


      <div id="dropdown-basic-button3" title="Time Interval">
        <li href="#/action-1">Monthly</li>
        <li href="#/action-2">Weekly</li>
        <li href="#/action-3">Daily</li>
      </div>
    </div>
  ) 

}
