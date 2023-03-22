
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
        "studyId" : "",
        "surveyId" : "",
        "version" : "",
        "task_id" : "",
        "question" : "",
        "id": 0,
        "type": "",
        "answers": "",
        "order_id": "",
        "is_active": "",
        "is_required": "",
        "has_comment": "",
        "has_url" : "",
        "parent_task_id" : "",
        "has_parent" : "",
        "child_triggering_input" : "",
    }]);

    const  {studyId}  = useParams();
    const  {surveyId}  = useParams();
    const {versionId} = useParams();

    const loadData = async () => {
        const result = await axios.get(`http://localhost:8080/study/${studyId}/survey/${surveyId}/version/${versionId}/questions/`);
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
                        <th>#</th>
                        <th>Study Id</th>
                        <th>Survey Id</th>
                        <th align = "Left" >Question</th>
                        <th>Type</th>
                        <th>Version</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((q, index) => (
                        <tr key={index}>
                        <th key={index}>
                            {index + 1}
                        </th>
                        <td align = "center">{q.studyId}</td>
                        <td align = "center">{q.surveyId}</td>
                        <td align = "Left">{q.question}</td>
                        <td>{q.type}</td>
                        <td>{q.version}</td>
                        </tr>
                    ))}
                </tbody>
                <Link className="btn btn-primary my-2" to={`/study/${studyId}/survey/${surveyId}/questions/responses/`}>
                                Responses
                            </Link>
                <Link className="btn btn-primary my-2" to={`/study/${studyId}/surveys/surveylist`}>Back</Link>
            </Table>
        </Container>
    );
}