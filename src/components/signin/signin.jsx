import React, { useState } from "react"
import './signin.css'

import swal from 'sweetalert';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
// import { Message } from "semantic-ui-react"


export const SignIn = () =>{

    // const [error, setError] = useState("false")
    const [state, setState] = useState("false")
  const navigate = useNavigate()
 

//   const [loading, setLoading] = useState(false);
//   useEffect(() =>{
//       setLoading(true)
//       setTimeout(()=>{
//           setLoading(false)
//       },1000)
//   },[]);
 
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
    axios.post('http://localhost:4500/api/users/login', state)
      .then(function (response) {
        console.log(response);
       
        if(response.status === 200){
// alert("not a user")
swal("Welcome to Eazzy Interact")
navigate("/home")
           }
       
      })
      .catch(function (error) {
        console.log(error);
        swal("Account or Password doesn't exist")

      });
  
     }
    return(
        <div id="signinContent">
            {/* <div id="signinHeader">
                <hr/>
                <h3>Eazzy Interact</h3>
                <hr/>
            </div> */}
            <form  id="signinForm">
                <h1>Sign in to EazzyInteract:</h1>
                {/* <p>Welcome to Eazzy Interact fill in this form</p> */}
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
            
            <p id="signinAlternative">Don't have an account? <span className="sbtn">
            <Link id="link" to="/signup" >Sign up</Link>
            </span></p>
            <p id="signinAlterative">Forgot Password? <span className="sbtn">
            <Link id="link" to="/reset" >Reset password</Link>
            </span></p>
          
           
        </div>
    );
}