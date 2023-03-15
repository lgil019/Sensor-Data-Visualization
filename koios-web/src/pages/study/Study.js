import React, {useState, useEffect} from "react";
import {Navigate, useNavigate, useParams, Link} from "react-router-dom";
import axios from 'axios';
import { Container, Table, Button } from 'react-bootstrap';

/**
 * Displays the contents of the study within the koios database.
 * @author Tony Erazo
 * @returns Study
 */
export default function Study() {

        /**
     * Create the study object here
     */
    const[study, setStudies] = useState([{
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

    const { id } = useParams();

    const loadData = async () => {
        console.log("ATTEMPTING TO GET");
        const result = await axios.get(`http://localhost:8080/study/${id}`);
        setStudies(result.data);
        console.log(result.data);
    }

    useEffect(()=>{
        loadData();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6-offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">View Study</h2>
                
                    <div className="card">
                        <div className="card-header">
                            Details of study id: {study.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Study Name: </b>
                                    {study.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Organization: </b>
                                    {study.organization}
                                </li>
                                <li className="list-group-item">
                                    <b>Description: </b>
                                    {study.description}
                                </li>
                                <li className="list-group-item">
                                    <b>Created By: </b>
                                    {study.createdBy}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={`/study/studylist`}>Back</Link>
                </div>
            </div>
        </div>
    );
}