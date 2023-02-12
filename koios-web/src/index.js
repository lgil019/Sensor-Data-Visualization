import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express ();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "capstone2",
  database: "koios",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/surveyresponse", (req, res) => {
  const q = "SELECT * FROM surveyresponse";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/surveyresponse", (req, res) => {
  const q = "INSERT INTO surveyresponse('ID', 'date', 'version')";

  const values = [
    req.body.surveyID,
    req.body.date,
    req.body.version,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/surveyresponse/:ID", (req, res) => {
  const surveyID = req.params.ID;
  const q = "UPDATE surveyresponse SET = 'date' = ?, 'version' = ?, WHERE surveyID = ?";

  const values = [
    req.body.surveyID,
    req.body.date,
    req.body.version,
  ];

  db.query(q, [...values, surveyID], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
