import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from './layout/Navbar';
import SurveyData from './pages/SurveyData';
import SurveyTest from './pages/SurveyTest';

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
    
     <Router>
     <Navbar/>
     <surveyData/>
        <Routes>
           <Route exact path="/" element={<Login />} />
           <Route exact path="/register" element={<Register />} />
           <Route exact path="/survey" element={<SurveyData />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
