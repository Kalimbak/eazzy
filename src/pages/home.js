import "./App.css";
import Navigation from "../components/Navigation";
import LeftSidebar from "../components/LeftSidebar";

import RightSidebar from "../components/RightSidebar";
import { useState } from "react";
import Home1 from "./home/home";
// import Post from "../components/post/Post";

function Home() {
  const [mobileMenu, setmobileMenu] = useState(false);

  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };

  return (
    <>

      <Navigation openMenu={toggle} />

      <main className="main-container">
    {/* <Post/> */}
<Home1/>

    {/* {
      post.map((a)=>{

      })
    } */}
      <RightSidebar /> 
      </main>
    </>
  );
}

export default Home;
