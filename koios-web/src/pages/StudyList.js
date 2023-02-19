//Made by Jonathan Diaz-Arencibia

import React, {useState, useEffect} from "react";
import {Container} from "react-bootstrap";
import {Navigate } from "react-router-dom";


export default function StudyList() {
    const [category, setID] = useState([]);
    const [goToSurvey, setGoToSurvey] = React.useState(false);

    if (goToSurvey) {
        return <Navigate to = "/SurveyList" />;
    }

    useEffect (() => {
        const getID = async () => {
            const res = await fetch ("http://localhost:8080/StudyList"); //Link for sql database
            const getdata = await res.json();
            setID(getdata);
        };

        getID();
    }, []);

    return (
        <React.Fragment>
            <Container>
                <div className="row">
                    <div className="col-sm-8 text-success">
                        <h5 className="p-3 fw-bold text-white">
                            Study List Table Page
                        </h5>
                        <table className="table table-bordered text-white">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Organization</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>View Survey</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.map((getID) => (
                                    <tr key = {getID.category_id}>
                                        <td> {getID.category_Title}</td>
                                        <td> {getID.category_Organization}</td>
                                        <td> {getID.category_Date}</td>
                                        <td> {getID.category_Status}</td>
                                        <td><button onClick={() => setGoToSurvey(true)}> View </button> </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
}