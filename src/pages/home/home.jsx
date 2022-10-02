// import "./App.css";
import "./home.css"
// import Navigation from "../components/Navigation";
// import LeftSidebar from "../components/LeftSidebar";
import Image from "../../pic.jpg";
import axios from "axios";
import { BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import LeftSidebar from "../../components/LeftSidebar";
import { useEffect } from "react";
import { useState } from "react";
import Welcome from "../welcome";

function Home1() {
  


const [loading, setLoading] =useState(false)
 const [posts, setPosts] = useState([])

 useEffect(()=>{
  axios.get('http://localhost:4000/article')
  .then(result => {
    console.log(result);
    setPosts(result.data.blogs)
  }).catch(err =>{
    console.log(err);

  })
  setLoading(true)
  setTimeout(()=>{
      setLoading(false)
  },1000)
},[])
// const [loading, setLoading] = useState(false);
// useEffect(() =>{
   
// },[]);


 

  return (
    <>
    {/* (loading ? <Welcome/> :( */}
    <LeftSidebar/>
      <main className="main" >
      
    {
    
      posts.map((posts) => (
        <div className="blog">
        <div className="posta">
        <div className="namenpic">
        <div className="up">
        <Link to='/profile' >

        <img className="profile" src={Image} alt="" height={"60px"} />
        </Link>
        <p> {posts.title}</p>
        </div>
        <p className="dummy">{posts.content}</p>
         <img className="image" src={posts.image} alt=""/>
         {/* <p className="date">{posts.date}</p> */}
        <button className="btn">Like <BiLike className="like"/></button>
      <div className="input">  <input type="text" placeholder="comment" /> <span> Send </span></div>
      <div>   </div> 
      </div>

        
    </div>
    </div>
    
    ) )
    }
   
      </main>
       {/* )) */}
 </>
  );
}

export default Home1;
