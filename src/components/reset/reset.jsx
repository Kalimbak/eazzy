import React from "react"
import './reset.css'
import logo from './logo.jpeg'
import google from './google.png'
import facebook from './facebook1.png'
import { Link } from "react-router-dom";


export const Reset = () =>{

    return(
        <div id="resetContent">
            <div id="reset">
                <hr/>
                <h3>Eazzy Interact</h3>
                <hr/>
            </div>
            <form action="" id="resetform">
                <h1>RESET PASSWORD</h1>
                <p>Fill in this form to Reset your password</p>
                <div className="signinInput">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter your email"/>
                </div>
                <button ><Link to="/resetmessage" id="link">Reset Your Password</Link></button>
               
            </form>
            

        </div>
    );
}