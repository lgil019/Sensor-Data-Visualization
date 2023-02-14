import './../index.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";
//import Navigation from '../layout/Navigation';

/**
 * @author Tony Erazo
 * The Register.js handles all front end functionality and communication with the server to submit an account registration request
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

    const onSubmit = async (e) => {
       e.preventDefault();
       await axios.post("http://localhost:8080/register", user)
       .then(response=> {
            console.log("response data: ", response.data);
            
            //TODO handle login errors here
            if(response.data.login_error == '0') {
                console.log("Login Success!");

                //Navigate to dashboard
            }
            else {
                document.getElementById("error_msg").className = "";
            }
       });
        //TODO submit login data to the server then send a router to the dashboard
        //navigate("/login");
    };

    const login = (e, email, password) => {
        console.log('Logging in... email:', email, 'pass', password);
    };

    return(
        <div className="container">
            <div className="row screen">
                <div className="screen-content">
                    <form onSubmit={(e) => onSubmit(e)} className="register">

                        

                        <div className="mb-3 my-2 register-field">
                            <input
                                type={"text"}
                                className="form-control register-input"
                                placeholder="E-mail"
                                name="email"
                                onChange={(e) => onInputChange(e)}/>
                        </div>

                        <div className="mb-3 my-2 register-field">
                            <input
                                type={"password"}
                                className="form-control register-input"
                                placeholder="Password"
                                name="password"
                                onChange={(e) => onInputChange(e)}/>
                        </div>

                        <Link className="btn btn-success mx-2" to="/register/">Register</Link>
                        <Link className="btn btn-danger mx-2 button register-submit" to="/">
                            <span class="button-text">Cancel</span>
                        </Link>
                        <br/><h4 id="error_msg" className="d-none">Invalid Email or Password.</h4>
                    </form>

                    <div class="social-register">
				        <h3>log in via</h3>
                        <div class="social-icons">
                            <a href="#" class="social-register__icon fa fa-instagram"></a>
                            <a href="#" class="social-register__icon fa fa-facebook"></a>
                            <a href="#" class="social-register__icon fa fa-twitter"></a>
                        </div>
                    </div>
                </div>
                <div class="screen-background">
                    <span class="screen-background__shape screen-background__shape4"></span>
                    <span class="screen-background__shape screen-background__shape3"></span>		
                    <span class="screen-background__shape screen-background__shape2"></span>
                    <span class="screen-background__shape screen-background__shape1"></span>
		        </div>		
            </div>
        </div>
    )
}