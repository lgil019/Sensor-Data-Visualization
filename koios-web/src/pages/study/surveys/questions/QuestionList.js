
import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import { Button, Collapse, Container, Table, Dropdown } from 'react-bootstrap';
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
        const[surveys, setSurveys] = useState([{
            "creationTime" : "",
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
            "version" : "",
        }]);
    // - {survey.creationTime.split(" ")[0]}
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

    const[responses, setResponses] = useState([{
        "studyId": "",
        "surveyId": "",
        "version": "",
        "taskId": "",
        "responseType": "",
        "response": "",
    }]);

    const[responseCount, setResponseCount] = useState([]);


    const  {studyId}  = useParams();
    const  {surveyId}  = useParams();
    const {versionId} = useParams();

    const loadData = async () => {
        const surveysResult = await axios.get(`http://localhost:8080/study/${studyId}/surveylist/`);
        setSurveys(surveysResult.data);
        const result = await axios.get(`http://localhost:8080/study/${studyId}/survey/${surveyId}/version/${versionId}/questions/`);
        setQuestions(result.data);
        //console.log(result.data);
        const answersResult = await axios.get(`http://localhost:8080/study/${studyId}/survey/${surveyId}/version/${versionId}/questions/responselist/`);
        setResponses(answersResult.data);
        console.dir(answersResult.data);

        const responseCountResult = await axios.get(`http://localhost:8080/study/${studyId}/survey/${surveyId}/version/${versionId}/questions/responses/`)
        setResponseCount(responseCountResult.data);

    }

    const setVersion = (questions, version) => {
        questions.version = version;
    }

    function getResponses(taskId) {
        var filteredResponses = [];
        for(let i = 0; i < responses.length; i++) {
            //console.log("Searching for Task Id: " + taskId + "...");
            if(responses[i].taskId === taskId) {
                //console.log("Found Task Id for response");
                filteredResponses.push(responses[i])
            }
        }
        //console.log("fR length: " + filteredResponses.length+ ", task_id: " + taskId);
        //console.log(filteredResponses);
        return filteredResponses;
    }

    function getNumResponses(taskId){
        let count = 0;
        for(let i = 0; i < responses.length; i++)
            if(responses[i].taskId === taskId)
                count++;
        return count;
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

            <Dropdown>

                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {"Select Version: " + versionId}
                                </Dropdown.Toggle>
                                
                                    <Dropdown.Menu>
                                        {surveys.map((survey, index) => (
                                            <Dropdown.Item href={`/study/${studyId}/survey/${surveyId}/version/${index+1}/questions/`} onClick={(e) => setVersion(survey, index+1)}>{(index+1) + " - " + survey.creationTime.substring(0,10) + " responses: " + responseCount[index+1]}</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                
            </Dropdown>
            
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
                        <th>Number of repsonses</th>
                        <th>ParentId</th>
                        <th>Show Graph</th>
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
                        <td>{getNumResponses(q.taskId)}</td>
                        <td>{q.parent_task_id === 0 ? " " : q.parent_task_id}</td>
                          {q.type !== "text" && q.type !== "textarea" && q.type !== "instruction" && q.type !== "recording" && q.type !== "fileuploader" ? (
                        <td>
                            <Button variant="primary" onClick={() => toggleCollapse(index)}>
                              {q.chart_is_visible ? "Collapse" : "Expand"}
                            </Button>
                        </td>) : <td></td>}

                        </tr>
                          {q.type !== "text" && q.type !== "textarea" && (
                        <td colSpan="7">
                          <div>
                            <Collapse in={q.chart_is_visible}>
                              <div>
                                <BarChartGraph data={q} responses={getResponses(q.taskId)}/>
                              </div>
                            </Collapse>
                          </div>
                        </td>)}
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
