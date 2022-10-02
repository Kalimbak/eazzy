import React from "react"
import './reset.css'
import logo from './logo.jpeg'
import google from './google.png'
import facebook from './facebook1.png'
import { Link } from "react-router-dom";
import axios from "axios"
import { useState } from "react"


export const Reset = () =>{

    const [state,setState]=useState({})
  
   
    const onchange = (e) =>{
     
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
     
    }
    const reset = async(e) =>{
        e.preventDefault()
        console.log('kevinmulimba')
        console.log(JSON.stringify())
  

// // fttfrfytgyutgi6gf76fi7f
    console.log(state)
    axios.post('http://localhost:4500/api/users/reg', state)
      .then(function (response) {
        console.log(response);
        // if(response === 200){
        //     Navigate("/home")
        //    }
      })
      .catch(function (error) {
        console.log(error);
      });
  
     }

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
                    <input type="text" placeholder="Enter your email" name="email" onChange={onchange}/>
                
                    <label htmlFor="">New password</label>
                    <input type="password" placeholder="Enter your email" name="password" onChange={onchange}/>
        
                </div>
                <button onClick={reset}><Link to="" id="link">Reset Your Password</Link></button>
               
            </form>
            

        </div>
    );
}