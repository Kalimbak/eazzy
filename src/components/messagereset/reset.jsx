import React from "react"
import './reset.css'
import logo from './logo.jpeg'
import google from './google.png'
import facebook from './facebook1.png'
import { Link } from "react-router-dom";


export const Message = () =>{

    return(
        <div id="msgresetContent">
            <div id="resethead">
                <hr/>
                <h3>Eazzy Interact</h3>
                <hr/>
            </div>
          <div className="msg">You are going to receive an email</div>

            

        </div>
    );
}