import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';

/**
 * Displays a list of all the studies within the koios database.
 * @author Tony Erazo
 * @returns StudyList
 */
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
        const result = await axios.get(`http://localhost:8080/study/studylist`);
        setStudies(result.data);
        console.log(result.data);
    }

    useEffect(()=>{
        loadData();
    }, []);

    return (
        <Container>



            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Organization</th>
                        <th>Date</th>
                        <th>State</th>
                        <th>View Study</th>
                        <th>View Surveys</th>
                    </tr>
                </thead>
                <tbody>
                    {studies.map((study, index) => (
                        <tr key={index}>
                        <th key={index}>
                            {index + 1}
                        </th>
                        <td>{study.name}</td>
                        <td>{study.organization}</td>
                        <td>{study.creationTime}</td>
                        <td>{study.state}</td>
                        <td>
                            <Link className="btn btn-success mx-2" to={`/study/study/${study.id}`}>
                                Study
                            </Link>
                        </td>
                        <td>
                            <Link className="btn btn-success mx-2" to={`/study/survey/surveylist/${study.id}`}>
                                Surveys
                            </Link>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            
        </Container>
    );
}