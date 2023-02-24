//Made by Jonathan Diaz-Arencibia

import './../index.css';
import React, {useState, useEffect} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import axios from 'axios';


export default function StudyList() {

        /**
     * Create the study object here
     */
    const[studies, setStudies] = useState([{
        "id": 0,
        "name": "",
        "organization": "",
        "description": "",
        "creation_time_zone_offset": 0,
        "state": 0,
        "instruction": "",
        "creationTime": "",
        "userEmailPrefix": "",
        "fitbitIntegrationEnabled": 0,
        "modificationTime": "0",
        "modificationTimeZoneOffset": null,
        "createdBy": "",
        "studyType": 0,
        "iconUrl": "",
        "inviteCode": "",
        "anonymizeData": 0,
        "userCounter": 0
    }]);

    const loadData = async () => {
        const result = await axios.get(`http://localhost:8080/studylist`);
        setStudies(result.data);
        console.log(result.data);
    }

    useEffect(()=>{
        loadData();
    }, []);

    return (
        <div className="container">



            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Organization</th>
                        <th scope="col">Date</th>
                        <th scope="col">State</th>
                        <th scope="col">View Survey</th>
                    </tr>
                </thead>
                <tbody>
                    {studies.map((study, index) => (
                        <tr key={index}>
                        <th scope="row" key={index}>
                            {index + 1}
                        </th>
                        <td>{study.name}</td>
                        <td>{study.organization}</td>
                        <td>{study.creationTime}</td>
                        <td>{study.state}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}