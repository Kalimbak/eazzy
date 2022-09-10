import React from "react"
import './reset.css'
import logo from './logo.jpeg'
import google from './google.png'
import facebook from './facebook1.png'
import { Link } from "react-router-dom";


export const Password = () =>{

    return(
        <div id="passwordContent">
            <div id="password">
                <hr/>
                <h3 className="two">Eazzy Interact</h3>
                <hr/>
            </div>
            <form action="" id="password2">
                <h1>New PASSWORD</h1>
                <p>Fill in this form to set your new password</p>
                <div className="signinInput">
                    <label htmlFor="">New Password</label>
                    <input type="password" placeholder="Enter your email"/>
                    <label htmlFor="">Confirm new password</label>
                    <input type="password" placeholder="Enter your email"/>
               
                    </div>
                <button ><Link to="/" id="link">Change Password</Link></button>
               
            </form>
            

        </div>
    );
}