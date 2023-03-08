import './App.css';
import './index.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from "react";
import Login from "./pages/Login";
import Navbar from './layout/Navbar';
import SurveyList from './pages/study/surveys/SurveyList';
import StudyList from './pages/study/StudyList';
import Study from './pages/study/Study';

function App() {
 
  return (
    <div className="App">
    
     <Router>
        <Navbar/>
        <Routes>
           <Route exact path="/" element={<Login />} />
           <Route exact path="/study/studylist" element={<StudyList />} />
           <Route exact path="/study/study/:id" element={<Study />} />
           <Route exact path="/study/survey/surveylist/:studyId" element={<SurveyList/>}/>

        </Routes>
     </Router>
    </div>
  );
}

export default App;
