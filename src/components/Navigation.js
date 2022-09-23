import React, { useState } from "react";
import Image from "../logo.jpeg"
import { BiMessageRoundedCheck } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import {Link} from "react-router-dom"


const Navigation = (props) => {
  const [showMenu, setshowMenu] = useState(false);
// const [isModal, setIsModel] = useState(false)
  const toggle = () => {
    setshowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="headerContainer">
        <div
          className="headerContainer__hamburgerMenu"
          onClick={() => props.openMenu()}
        ></div>
        <a  className="headerContainer__logo" href="/home">
          <img src={Image} alt="" size="3.125rem"/>
        </a>

        <div className="headerContainer__searchBox">
          <form>
            <input type="text" placeholder="Search..." aria-label="search" />
          </form>
        </div>

        <div className="headerContainer__right">
         <Link to="/postarticle"> <button >Write a post</button></Link>
    <Link to="/postjob"> <button>Post a job</button> </Link>

          <i className="hidden-search">
            <FiSearch />
          </i>
        
          <i>
            <RiNotificationLine />
          </i>

        
        </div>
      </div>

      <div className={showMenu ? "dropdown-menu" : "dropdown-menu-close"}>
        <ul>
          <li onClick={toggle}>
            <a href="/profile">
              <div className="u-name">CodeBucks</div>
              <small className="u-name-id">@codebucks</small>
            </a>
          </li>

          <li onClick={toggle}>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li onClick={toggle}>
            <a href="/post">Writing a Post</a>
          </li>
       
          <li onClick={toggle}>
            <a href="/signout">Signout</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
