// import "./App.css";
import "./home.css"
// import Navigation from "../components/Navigation";
// import LeftSidebar from "../components/LeftSidebar";
import Image from "../../pic.jpg"
import { BiLike } from "react-icons/bi";
import LeftSidebar from "../../components/LeftSidebar";
// import "node_modules/video-react/dist/video-react.css";
// import RightSidebar from "../components/RightSidebar";
// import { useState } from "react";
// import Post from "../components/post/Post";

function Home1() {
  

  const posts= [
    
       {
name: "kalimba kevin",
description: "this is a dummy trial",

      },

      {
        name: "kalimba kevin",
        description: "this is a dummy trial"
              },

      {
        name: "Aminadab Bruce",
        description: "this is also a dummy"
      },
      {
        name: "Aminadab Bruce",
        description: "this is also a dummy"
      },
      {
        name: "Aminadab Bruce",
        description: "this is also a dummy"
      }
    
  ]

  return (
    <>
    <LeftSidebar/>
      <main className="main">
    {
    
      posts.map((posts) => 
        <div className="blog">
        <div className="post">
        <div className="namenpic">
        <div className="up">
        <img className="profile" src={Image} alt="" height={"60px"} />
        <p> {posts.name}</p>
        </div>
        <p className="dummy">{posts.description}</p>
         <img className="image" src={Image} alt=""/>
        <button className="btn">Like <BiLike className="like"/></button>
      <div className="input">  <input type="text" placeholder="comment" /> <span> Send </span></div>
      <div>   </div> 
      </div>

        
    </div>
    </div>
      )
    }
   
      </main>
    </>
  );
}

export default Home1;
