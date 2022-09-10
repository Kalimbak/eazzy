import React from "react";
import { SignIn } from "../../components/signin/signin";
import "./signInPage.css";
import Logo from "./logo.jpeg"


let Login = ()=>{

    return(
        <div id="signInPageContent">
          
            <div id="signInPageRightSide">
            <img src={Logo} alt="" />
            </div>
            <div id="signInPageLeftSide">
                <SignIn/>
            </div>
        </div>
    );
}

export default Login;