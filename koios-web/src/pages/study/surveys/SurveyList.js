
import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';

/**
 * Displays a list of all the studies within the koios database.
 * @author Luis A Gil
 * @returns SurveyList
 */
export default function SurveyList() {

        /**
     * Create the study object here
     */
    const[surveys, setSurveys] = useState([{
        "creation_time" : "",
        "creation_time_zone_offset" : "",
        "description" : "",
        "end_time" : "",
        "end_time_zone_offset" : "",
        "id": 0,
        "lifecycle": "",
        "modification_time": "",
        "modification_time_zone_offset": "",
        "name": "",
        "published_time": "",
        "published_time_zone_offset": "",
        "published_version" : "",
        "responseCount" : "",
        "schedule" : "",
        "start_time" : "",
        "start_time_zone_offset" : "",
        "state" : "",
        "study_id" : "",
    }]);

    const  {studyId}  = useParams();


    const loadData = async () => {
        const result = await axios.get(`http://localhost:8080/study/${studyId}/surveys/`);
        setSurveys(result.data);
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
                        <th>Version</th>
                    </tr>
                </thead>
                <tbody>
                    {surveys.map((survey, index) => (
                        <tr key={index}>
                        <th key={index}>
                            {index + 1}
                        </th>
                        <td align = "left">{survey.name}</td>
                        <td>
                            <Link className="btn btn-success mx-2" to={`/study/${studyId}/survey/${survey.id}/questions/`}>
                                Questions
                            </Link>
                        </td>
                        </tr>
                    ))}
                </tbody>
                <Link className="btn btn-primary my-2" to={`/study/studylist`}>Back</Link>
            </Table>
            
        </Container>
    );
}