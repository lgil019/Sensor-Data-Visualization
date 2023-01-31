import './../index.css';

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";

/**
 * @author Tony Erazo
 * The Login.js handles all front end functionality and initial communication witht he server
 * @returns 
 */

export default function Login() {
    //Comment
    let navigate = useNavigate();

    const [user, setUser]=useState({
        email:"",
        password:"",

    })

    const{email, password}=user;

    const onInputChange= (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    };

    const onSubmit = (e) => {
       
        //TODO submit login data to the server then send a router to the dashboard
        //navigate("/login");
    };

    const login = (e, email, password) => {
        console.log('Logging in... email:', email, 'pass', password);
    };

    return(
        <div className="container">
            <div className="row screen">
                <div className="screen_content">
                    <form onSubmit={(e) => onSubmit(e)} className="login">

                        
                        <div className="mb-3 my-2 login__field">
                            <label htmlFor="Email" className="form-label">E-mail</label>
                            <i class="login__icon fa fa-user"></i>
                            <input
                                type={"text"}
                                className="form-control login__input"
                                placeholder="E-mail"
                                name="email"
                                onChange={(e) => onInputChange(e)}/>
                        </div>

                        <div className="mb-3 my-2">
                            <label htmlFor="Password" className="form-label">Password</label>
                            <input
                                type={"password"}
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                onChange={(e) => onInputChange(e)}/>
                        </div>


                        <button className="btn btn-success mx-2" onClick={(e) => login(e, user.email, user.password)}>Login</button>
                        <Link className="btn btn-primary mx-2" to="/register/">Register</Link>
                        <br/><h4 id="error_msg" className="d-none">Invalid Email or Password.</h4>
                    </form>
                </div>
            </div>
        </div>
    )
}