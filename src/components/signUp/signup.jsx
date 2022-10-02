import React, { useState } from "react"
import './signup.css'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


import Select from "react-select"
import swal from "sweetalert";



export const SignUp = () =>{

    const Navigate = useNavigate()
    const [state,setState]=useState({})
   
    const onchange = (e) =>{
     
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
     
    }
    const signUp = async(e) =>{
        e.preventDefault()
        console.log('kevinmulimba')
        console.log(JSON.stringify())
  

// // fttfrfytgyutgi6gf76fi7f
    console.log(state)
    axios.post('http://localhost:4500/api/users/signup', state)
      .then(function (response) {
        console.log(response);
        if(response.status === 200){
            swal("Welcome to eazzy Interact now login")
            Navigate("/")
           }
      })
      .catch(function (error) {
        console.log(error);
      });
  
     }
    return(
        <div id="signupContent">
            {/* <div id="signupHeader">
                <hr/>
                <h3 className="one">Eazzy Interact</h3>
                <hr/>
            </div> */}
            
            <form  id="signupForm">
                <div className="hello">Create account in EazzyInteract:</div>
         
                <div className="signupInput">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter your email" name="email" onChange={onchange}/>
                </div>
                {/* <div className="signupInput">
                    <label htmlFor="">Fullname</label>
                    <input type="text" placeholder="Enter your Fullname"/>
                </div> */}
                <div className="signupInput">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Enter your username" name="name" onChange={onchange}/>
                </div> 
                <div className="signupInput">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" placeholder="Enter your phone number" name="phonenumber" onChange={onchange}/>
                </div>
                <div className="signupInput">
                    <label htmlFor="">Gender (Male / Female)</label>
                    <input type="text" placeholder="Enter your Gender" name="gender" onChange={onchange}/>
                </div> 
                {/* <div className="signupInput">
                     <label htmlFor="">Gender</label>  */}
                    {/* <input type="text" placeholder="Enter your username" name="name" onChange={onchange}/> */}
                    
                {/* <Select
                options={genders}
                  name="gender"
                  className="select"
                  id='input'
                //   onChange={onchange}
                /> */}
               
                {/* </div> */}
                {/* <select name="" id="" option></select> */}
                <div className="signupInput">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="............" name="password" onChange={onchange}/>
                </div>
 
                <button onClick={signUp}>Sign Up</button>
             
                
            </form>
            

            <p id="signinAlternative">Already have an account? <span className="sbtn"><Link id="link" to="/" >Sign in</Link></span></p>
        </div>
    );
}