import React from "react";
import { SignUp } from "../../components/signUp/signup";
import "./signUpPage.css";
import Logo from "./logo.jpeg"


const SignUpPage = ()=>{

    return(
        <div id="signUpPageContent">
            <div id="signUpPageLeftSide">
                <SignUp/>
            </div>
            <div id="signUpPageRightSide" >
                <img src={Logo} alt="" />
            </div>
        </div>
    );
}
export default SignUpPage;