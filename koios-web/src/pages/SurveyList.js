//Made by Jonathan Diaz-Arencibia

import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";


export default function SurveyList() {
    let navigate = useNavigate();

    //Assume they're not logged in
    if(!localStorage.getItem("email")) {
        navigate('/login');
    }

    return (
        <div className="className" >

        </div>
    );
}