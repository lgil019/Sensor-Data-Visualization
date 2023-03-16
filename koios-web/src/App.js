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
import QuestionList from './pages/study/surveys/questions/QuestionList';
import LineChartGraph from './pages/graphs/LineChartGraph';

function App() {
 
  return (
    <div className="App">
    
     <Router>
        <Navbar/>
        <Routes>
           <Route exact path="/" element={<Login />} />
           <Route exact path="/study/studylist" element={<StudyList />} />
           <Route exact path="/study/:id" element={<Study />} />
           <Route exact path="/study/:studyId/surveys/surveylist/" element={<SurveyList/>}/>
           <Route exact path="/study/:studyId/survey/:surveyId/questions/" element={<QuestionList/>}/>
           <Route exact path="/graph/" element={<LineChartGraph/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
