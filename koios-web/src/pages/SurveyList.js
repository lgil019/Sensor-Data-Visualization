//Made by Jonathan Diaz-Arencibia

import React, {useState, useEffect} from "react";
import {Container} from "react-bootstrap";

export default function SurveyList() {
    const [category, setID] = useState([]);

    useEffect (() => {
        const getID = async () => {
            const res = await fetch (""); //Link for sql database
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
                            Test Survey Page
                        </h5>
                        <table className="table table-bordered text-white">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>StartDate</th>
                                    <th>EndDate</th>
                                    <th>Version</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.map((getID) => (
                                    <tr key = {getID.category_id}>
                                        <td> {getID.category_Title}</td>
                                        <td> {getID.category_StartDate}</td>
                                        <td> {getID.category_EndDate}</td>
                                        <td> {getID.category_Version}</td>
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