
import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';

/**
 * Displays a list of all the studies within the koios database.
 * @author Luis A Gil
 * @returns questionList
 */
export default function questionsList() {

        /**
     * Create the study object here
     */
    const[questions, setQuestions] = useState([{
        "study_id" : "",
        "survey_id" : "",
        "version" : "",
        "task_id" : "",
        "task_text" : "",
        "id": 0,
        "type": "",
        "possible_input": "",
        "order_id": "",
        "is_active": "",
        "is_required": "",
        "has_comment": "",
        "has_url" : "",
        "parent_task_id" : "",
        "has_parent" : "",
        "child_triggering_input" : "",
    }]);

    const  {surveyId}  = useParams();


    const loadData = async () => {
        const result = await axios.get(`http://localhost:8080/study/surveys/questions/${surveyId}`);
        setQuestions(result.data);
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
                        <th>Question</th>
                        <th>Type</th>
                        <th>Answers</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question, index) => (
                        <tr key={index}>
                        <th key={index}>
                            {index + 1}
                        </th>
                        <td align = "left">{question.task_text}</td>
                        <td>{question.type}</td>
                        <td>{question.possible_input}</td>
                        <td>
                            <Link className="btn btn-success mx-2" to={`/home`}>
                                Question Details
                            </Link>
                        </td>
                        </tr>
                    ))}
                </tbody>
                <Link className="btn btn-primary my-2" to={`/study/surveys/${studyId}`}>Back</Link>
            </Table>
            
        </Container>
    );
}