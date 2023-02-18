import './../index.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";
//import Navigation from '../layout/Navigation';
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

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    const{email, password}=user;

    const onInputChange= (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    };

    const onSubmit = async (e) => {
       e.preventDefault();
       await axios.post("http://localhost:8080/login", user)
       .then(response=> {
            console.log("response data: ", response.data);
            
            //TODO handle login errors here
            if(response.data.login_error == '0') {
                console.log("Login Success!");

                //Navigate to dashboard
                navigate('/survey');
            }
            else {
                document.getElementById("error_msg").className = "";
            }
       });


    const login = (e, email, password) => {
        console.log('Logging in... email:', email, 'pass', password);
    };

    return(
        <div class="container" id="container">
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button class="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}