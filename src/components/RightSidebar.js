import React from "react";
// import Image from "../logo.jpeg"
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillLinkedin} from "react-icons/ai"

const jobs= [
  {
    name:"MTN fullstack",
    link:"https://group.mtn.com/careers/"
  },
  {
    name:"MTN fullstack",
    link:"https://group.mtn.com/careers/"
  },
  {
    name:"MTN fullstack",
    link:"https://group.mtn.com/careers/"
  },
  {
    name:"MTN fullstack",
    link:"https://group.mtn.com/careers/"
  },
  {
    name:"MTN fullstack",
    link:"https://group.mtn.com/careers/"
  },
  {
    name:"MTN fullstack",
    link:"https://group.mtn.com/careers/"
  },
  {
    name:"MTN fullstack",
    link:"https://group.mtn.com/careers/"
  },
   {
    name:"MTN fullstack",
    link:"https://group.mtn.com/careers/"
  }

]

const RightSidebar = () => {
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
     
     {
      jobs.map((jobs) =>
        <li>
        <a href={jobs.link}>{jobs.name}</a>
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
