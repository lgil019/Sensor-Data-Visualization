
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

    const  {studyId}  = useParams();
    const  {surveyId}  = useParams();


    const loadData = async () => {
        const result = await axios.get(`http://localhost:8080/study/${studyId}/surveys/${surveyId}/questions/`);
        setQuestions(result.data);
        console.log(result.data);
    }

    useEffect(()=>{
        loadData();
    }, []);

    return (
        <Container>

            
        </Container>
    );
}