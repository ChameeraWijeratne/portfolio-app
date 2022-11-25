import "./ImgStyles.css";

import React from "react";

import IntroImg from "../assets/intro-bg.jpg";

import {Link} from "react-router-dom";

const Img = ()=>{
    return <div className="Image">
        <div className="mask">
            <img className="intro-img"
            src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/project" className="btn">
                    PROJECTS
                </Link>
                <Link to="/contact" className="btn btn-light">
                    CONTACT
                </Link>
            </div>
        </div>
    </div>
};

export default Img;
