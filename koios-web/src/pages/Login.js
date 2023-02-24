import './../index.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

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
    });
   
    const LoadPage = () => {
        useEffect(() => {

            //Assume they're logged in
            if(localStorage.getItem("email")) {
                navigate('/studylist');
            }

            const signUpButton = document.getElementById('signUp');
            const signInButton = document.getElementById('signIn');
            const container = document.getElementById('main-container');

            signUpButton.addEventListener('click', () => {
                container.classList.add("right-panel-active");
            });
            
            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });
        });
    }


    const{email, password}=user;

    const onInputChange= (e) => {
        //console.log("typing... " + [e.target.name] + e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
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
                navigate('/survey');
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
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fa fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fa fa-google"></i></a>
                            <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className="login-button">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#" onSubmit={(e) => onSubmit(e)}>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fa fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fa fa-google"></i></a>
                            <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
                        </div>
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
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="login-button login-button--ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}