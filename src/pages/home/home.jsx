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
// import "node_modules/video-react/dist/video-react.css";
// import RightSidebar from "../components/RightSidebar";
// import { useState } from "react";
// import Post from "../components/post/Post";

function Home1() {
  

//   const posts= [
    
//        {
// name: "Aminadab Bruce",
// description: "this is a dummy trial",

//       },

//       {
//         name: "kalimba kevin",
//         description: "this is a dummy trial"
//               },

//       {
//         name: "Aminadab Bruce",
//         description: "this is also a dummy"
//       },
//       {
//         name: "Aminadab Bruce",
//         description: "this is also a dummy"
//       },
//       {
//         name: "Aminadab Bruce",
//         description: "this is also a dummy"
//       }
    
//   ]
 const [posts, setPosts] = useState([])

 useEffect(()=>{
  axios.get('https://kalimbacapstone.herokuapp.com/blog')
  .then(res => {
    console.log(res);
    setPosts(res.data)
  }).catch(err =>{
    console.log(err);
  })
},[])
// useEffect(() =>{
//   getPosta();
// }, [])

// const getPosta = async () => {
// try {
//   const res = await axios.get('http://localhost:4000/blog');
// setPosts(res.data)
// }catch (err) {
//   alert(err.message);
// }

// }

 

  return (
    <>
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
         <img className="image" src={Image} alt=""/>
        <button className="btn">Like <BiLike className="like"/></button>
      <div className="input">  <input type="text" placeholder="comment" /> <span> Send </span></div>
      <div>   </div> 
      </div>

        
    </div>
    </div>
    
    ) )
    }
   
      </main>
    </>
  );
}

export default Home1;
