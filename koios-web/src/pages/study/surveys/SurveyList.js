
import React, {useState, useEffect} from "react";
import {Navigate, useNavigate, Link, useParams} from "react-router-dom";
import axios from 'axios';
import { Container, Table, Button } from 'react-bootstrap';
import StudyList from "../StudyList";

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
        "id": 0,
        "name": "",
        "start_time": "",
        "end_time": "",
       
    }]);

    const  {studyId}  = StudyList();


    const loadData = async () => {
        const result = await axios.get(`http://localhost:8080/study/surveys/${studyId}`);
        setSurveys(result.data);
        console.log(result.data);
    }

    useEffect(()=>{
        loadData();
    }, []);

    return (
        <Container>

            <Table table-dark>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {surveys.map((survey, index) => (
                        <tr key={index}>
                        <th key={index}>
                            {index + 1}
                        </th>
                        <td>{survey.name}</td>
                        <td>{survey.start_time}</td>
                        <td>{survey.end_time}</td>
                        <td>
                            <Link className="btn btn-success mx-2" to={`/home`}>
                                Questions
                            </Link>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            
        </Container>
    );
}