import './../index.css';
import React from 'react';
import {useState} from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import mysql from "mysql";

export default function surveyData() {

  const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'database_name',
  });
  
  function App() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'CS5454',
            database: 'Local instance MySQL80',
          });
  
          const [rows, fields] = await connection.query('SELECT * FROM table_name');
          setData(rows);
  
          connection.end();
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, []);

  return (
    <>
    <DropdownButton id="dropdown-basic-button" title="Surveys">
      <Dropdown.Item href="#/action-1">Survey 1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Survey 2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>  
    
    <DropdownButton id="dropdown-basic-button2" title="Version">
      <Dropdown.Item href="#/action-1">Version 1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Version 2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Version 3</Dropdown.Item>
    </DropdownButton>


 <DropdownButton id="dropdown-basic-button3" title="Time Interval">
      <Dropdown.Item href="#/action-1">Monthly</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Weekly</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Daily</Dropdown.Item>
    </DropdownButton>
</>
  );

  }


    

    
    
    
    
    

