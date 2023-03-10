import './../index.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import md5 from 'md5-hash'

/**
 * @author Tony Erazo
 * The Login.js handles all front end functionality and initial communication with the server
 * Jonathan -> Removed sign up features
 * @returns 
 */



export default function Login() {
    //Comment
    let navigate = useNavigate();
    var md5Hash = require("md5-hash");

    const [user, setUser]=useState({
        email:"",
        password:"",
    });
   
    const LoadPage = () => {
        useEffect(() => {

            //Assume they're logged in
            if(localStorage.getItem("email")) {
                navigate('/study/studylist');
            }

            const signInButton = document.getElementById('signIn');
            const container = document.getElementById('main-container');
            
            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });
        });
    }


    const{email, password}=user;

    const onInputChange= (e) => {
        //console.log("typing... " + [e.target.name] + e.target.value)
        if(e.target.name === 'password') {
            console.log("setting password val");
            setUser({...user,[e.target.name]:md5Hash.default(e.target.value)});
            console.log("md5: " + user.password);
        }
        else {
            setUser({...user,[e.target.name]:e.target.value})
        }
        
        console.log(e.target.name + " " + e.target.value)
    };

    const onSubmit = async (e) => {
       e.preventDefault();
       await axios.post("http://localhost:8080/login", user)
       .then(response=> {
            console.log("response data: ", response.data);
            
            //TODO handle login errors here
            if(response.data.login_error === '0') {
                console.log("Login Success!");

                localStorage.setItem("email", user.email);
                //Navigate to dashboard
                navigate('/study/studylist');
            }
            else {
               // document.getElementById("error_msg").className = "";
            }
       });
    }


    const login = (e, email, password) => {
        console.log('Logging in... email:', email, 'pass', password);
    };

    return(
        <div className="container" onLoad={LoadPage()}>
            <div className="main-container" id="main-container">
                <div className="form-container sign-in-container">
                    <form action="#" onSubmit={(e) => onSubmit(e)}>
                        <h1>Sign in</h1>
                        <span>or use your account</span>
                        <input type={"text"} placeholder="E-mail" name="email" onChange={(e) => onInputChange(e)}/>
                        <input type={"password"} placeholder="Password" name="password" onChange={(e) => onInputChange(e)}/>
                        <a href="#">Forgot your password?</a>
                        <button className="login-button" onClick={(e) => login(e, user.email, user.password)}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="login-button login-button--ghost" id="signIn">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}