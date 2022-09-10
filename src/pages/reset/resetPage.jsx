import React from "react";
import "./resetPage.css";
import Logo from "./logo.jpeg"
import { Reset } from "../../components/reset/reset";


let ResetPage = ()=>{

    return(
        <div id="signInPageContent">
          
            <div id="signInPageRightSide">
            <img src={Logo} alt="" />
            </div>
            <div id="signInPageLeftSide">
                <Reset/>
            </div>
        </div>
    );
}

export default ResetPage;