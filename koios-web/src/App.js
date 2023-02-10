import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from "react";
import Login from "./pages/Login";
import Navbar from './layout/Navbar';
import SurveyData from './pages/SurveyData';

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
    
     <Router>
     <Navbar/>
     <surveyData selected={selected} setSelected={setSelected}/>
        <Routes>
           <Route exact path="/" element={<Login />} />
           <Route exact path="/survey" element={<SurveyData />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
