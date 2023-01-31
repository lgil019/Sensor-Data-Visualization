import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
