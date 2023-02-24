//Made by Jonathan Diaz-Arencibia

import './../index.css';
import React, {useState, useEffect} from "react";
import {Container} from "react-bootstrap";

export default function SurveyList() {
    const [category, setID] = useState([]);

    useEffect (() => {
        const getID = async () => {
            const res = await fetch ("http://localhost:8080/SurveyList"); //Link for sql database
            const getdata = await res.json();
            setID(getdata);
        };

    //Assume they're not logged in
    if(!localStorage.getItem("email")) {
        navigate('/login');
    }

    return (
        <div className="className" >

        </div>
    );
}