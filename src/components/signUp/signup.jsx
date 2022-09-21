import React, { useState } from "react"
import './signup.css'
import logo from './logo.jpeg'
import { useNavigate } from "react-router-dom";
import getFormData from "../../utils/formdata";
import { UserRepositoryImpl } from "../../data/repository/user-repository";
// import google from './google.png'
// import facebook from './facebook1.png'
import { Link, Navigate } from "react-router-dom";


export const SignUp = () =>{

    // const navigate = useNavigate()
    const [state,setState]=useState({})
    
    const userRepository = new UserRepositoryImpl()
    /**
     * 
     * @param {Event} evt
     */

    const submitUserData =async (evt)=>{
        evt.preventDefault();
        /**
         * @type {HTMLFormElement}
         */
        const form = evt.target;
         /**
     * @type {import('../../../data/models/types').UserModel}
    */

        const formData = getFormData(form);
        console.log("fsdfsd",formData);
        const resp = await userRepository.registerUser(formData);
        // if(resp === true){
        //     navigate("/")
        // }
    }
    // const onChange = (e) =>{
     
    //     setState({
    //         ...state,
    //         [e.target.name]:e.target.value
    //     })
     
    // }

    // const signUp = async(e) =>{
    //     e.preventDefault()
    //     console.log('kevinmulimba')
    //     console.log(JSON.stringify(state))
    
    //   await  fetch('https://eibackend.herokuapp.com/api/users/signup' ,{method:'POST',mode:'no-cors',body:JSON.stringify(state),headers:{'content-type':'application/json'}})
    
   
   
    //  }
    return(
        <div id="signupContent">
            <div id="signupHeader">
                <hr/>
                <h3 className="one">Eazzy Interact</h3>
                <hr/>
            </div>
            <form onSubmit={submitUserData} id="signupForm">
         
                <div className="signupInput">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter your email" name="email" />
                </div>
                {/* <div className="signupInput">
                    <label htmlFor="">Fullname</label>
                    <input type="text" placeholder="Enter your Fullname"/>
                </div> */}
                <div className="signupInput">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Enter your username" name="name" />
                </div>
                <div className="signupInput">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="............" name="password" />
                </div>
 
                <button type="submit">Sign Up</button>
             
                
            </form>
            

            <p id="signinAlternative">Already have an account? <span><Link id="link" to="/">Sign in</Link></span></p>
        </div>
    );
}