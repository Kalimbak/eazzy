import React, { useState } from "react"
import './signin.css'
import logo from './logo.jpeg'
import google from './google.png'
import facebook from './facebook1.png'
import { Link } from "react-router-dom";
import axios from "axios"


export const SignIn = () =>{

    const [state, setState] = useState("false")
  

    const onchange = (e) =>{
     
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
     
    }

    const login = async(e) =>{
        e.preventDefault()
        console.log('kevinmulimba')
        console.log(JSON.stringify())
  

// fttfrfytgyutgi6gf76fi7f
    console.log(state)
    axios.post('http://localhost:4000/user/login', state)
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
        <div id="signinContent">
            <div id="signinHeader">
                <hr/>
                <h3>Eazzy Interact</h3>
                <hr/>
            </div>
            <form  id="signinForm">
                <h1>SIGN IN</h1>
                <p>Welcome to Eazzy Interact fill in this form</p>
                <div className="signinInput">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter your email" name="email" onChange={onchange}/>
                </div>
                <div className="signinInput">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="............"  name="password" onChange={onchange}/>
                </div>
                
                <button onClick={login}><Link to="" id="link">Login</Link></button>
                <p id="or"><hr /> OR <hr /></p>
       
            </form>
            
            <p id="signinAlternative">Don't have an account? <span>
            <Link id="link" to="/signup" >Sign up</Link>
            </span></p>
              
            <p id="signAlternative">Forgot Password? <span>
            <Link id="link" to="/reset" >Reset password</Link>
            </span></p>
           
        </div>
    );
}