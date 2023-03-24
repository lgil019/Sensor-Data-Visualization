
import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import { Button, Collapse, Container, Table } from 'react-bootstrap';
import BarChartGraph from '../../../graphs/BarChartGraph';

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
        "taskId" : "",
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
        "chart_is_visible" : false,
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

    const toggleCollapse = (index) => {
        setQuestions((prevState) => {
            const updatedQuestions = [...prevState];
            updatedQuestions[index] = { ...updatedQuestions[index], chart_is_visible: !updatedQuestions[index].chart_is_visible };
            return updatedQuestions;
        });
    };

    return (
        <Container>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        {//<th>Study Id</th>
                        //<th>Survey Id</th>
                        }
                        <th align = "Left" >Question</th>
                        <th>Type</th>
                        <th>Child Trigger</th>
                        <th>Version</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((q, index) => (
                        <>
                        <tr key={index}>
                        <th key={index}>
                            {index + 1}
                        </th>
                        {//<td align = "center">{q.studyId}</td>
                        //<td align = "center">{q.surveyId}</td>
                        }
                        <td align = "Left">{q.question}</td>
                        <td>{q.type}</td>
                        <td>{q.childTriggeringInput}</td>
                        <td>{q.version}</td>
                        </tr>
                        <tr>
                        <td colSpan="6">
                          <div>
                            <Button variant="primary" onClick={() => toggleCollapse(index)}>
                              {q.chart_is_visible ? "Collapse" : "Expand"}
                            </Button>
                            <Collapse in={q.chart_is_visible}>
                              <div>
                                <BarChartGraph question={q.question} studyId={q.studyId} surveyId={q.surveyId} taskId={q.taskId}/>
                              </div>
                            </Collapse>
                          </div>
                        </td>
                        </tr>
                        </>
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
