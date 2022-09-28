import React,{ useEffect, useState }  from "react";
// import Image from "../logo.jpeg"
import axios from "axios";
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillLinkedin} from "react-icons/ai"



const RightSidebar = () => {


  const [job, setJob] = useState([])

  useEffect(()=>{
    
// const [job, setJob] = useState('')

// useEffect(()=>{
 axios.get('http://localhost:4000/job')
 .then(res => {
   console.log(res.data);
   setJob(res.data)
 })
.catch(err =>{
   console.log(err);
 })
 console.log("hello")
 console.log("hello")
 
}, [])


  return (
    <aside className="rightBar">
    <div className="allin">
     <div className="socials">
     Social medias
     <ul>
     <li>
     <a href="">
     <BsFacebook/>
     </a>
     </li>
     <li>
     <a href="">
     <AiFillInstagram/>
     </a>
     </li>
     <li>
     <a href="">
     <AiFillLinkedin/>
     </a>
     </li>
     </ul>
     </div>
     <div className="jobs">
     <div className="pjob">
     <p>Latest Jobs</p>
    
     </div>
     <ul className="ul">
     
     {job.map((job) =>
        <li>
        
        <a href={job.description} >{job.title}</a>
        </li>
      )
     }
     </ul>

     </div>
     </div>
    </aside>
  );
};

export default RightSidebar;
