import "./App.css";
import Navigation from "../components/Navigation";
import LeftSidebar from "../components/LeftSidebar";

import RightSidebar from "../components/RightSidebar";
import { useState } from "react";
import Post from "../components/post/Post";

function Home() {
  const [mobileMenu, setmobileMenu] = useState(false);

  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };

  return (
    <>

      <Navigation openMenu={toggle} />

      <main className="main-container">
        <LeftSidebar burgerMenu={mobileMenu} closeMenu={toggle} />
    <Post/>
        {/* <RightSidebar /> */}
      </main>
    </>
  );
}

export default Home;
