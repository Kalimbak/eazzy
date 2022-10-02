import React, { useState } from "react";
import Image from "../logo.jpeg"
import { BiMessageRoundedCheck } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import swal from "sweetalert";
import {Link, useNavigate} from "react-router-dom"


const Navigation = (props) => {
  const [showMenu, setshowMenu] = useState(false);
// const [isModal, setIsModel] = useState(false)
  const toggle = () => {
    setshowMenu(!showMenu);
  };
  const navigate = useNavigate()
const [state, setState] = useState(false)

//   const onchange = (e) =>{
     
//     setState({
//         ...state,
//         [e.target.name]:e.target.value
//     })
 
// }

const logout = async(e) =>{
    e.preventDefault()
    console.log('kevinmulimba')
    console.log(JSON.stringify())


// fttfrfytgyutgi6gf76fi7f
// console.log(state)
axios.post('http://localhost:4500/api/users/logout', state)
  .then(function (response) {
    console.log(response);
   
    if(response.status === 200){
// alert("not a user")
swal("Your logged out of eazzy interact")
navigate("/")
       }
   
  })
  .catch(function (error) {
    console.log(error);
    swal("Account or Password doesn't exist")

  });

 }

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
        
        <button onClick={logout}>Logout</button>
        
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
