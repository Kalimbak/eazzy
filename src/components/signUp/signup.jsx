import React from "react"
import './signup.css'
import logo from './logo.jpeg'
// import google from './google.png'
// import facebook from './facebook1.png'
import { Link } from "react-router-dom";


export const SignUp = () =>{

    const login = () =>{
        console.log("hello");
        window.location.assign("/")
    }
    return(
        <div id="signupContent">
            <div id="signupHeader">
                <hr/>
                <h3 className="one">Eazzy Interact</h3>
                <hr/>
            </div>
            <form action="" id="signupForm">
                <h1>SIGN UP</h1>
                <p>Welcome to Eazzy Interact fill in this form</p>
                <div className="signupInput">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter your email"/>
                </div>
                <div className="signupInput">
                    <label htmlFor="">Fullname</label>
                    <input type="text" placeholder="Enter your Fullname"/>
                </div>
                <div className="signupInput">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Enter your username"/>
                </div>
                <div className="signupInput">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="............"/>
                </div>
 
                <button onClick={login}>Sign Up</button>
                <p id="or"><hr /> OR <hr /></p>
        
                {/* <div id="loginButtons">
                <button><img src={facebook} alt="" />Facebook account</button>
                <button><img src={google} alt="" />Google account</button>
            </div> */}
            </form>
            

            <p id="signinAlternative">Already have an account? <span><Link id="link" to="/">Sign in</Link></span></p>
        </div>
    );
}