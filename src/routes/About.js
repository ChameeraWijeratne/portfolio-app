import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Img2 from "../Components/Img2";
import AboutContent from "../Components/AboutContent";

const About = () =>{
    return <div>
        <Navbar/>
        <Img2 heading="ABOUT." text="I'm a freindly Full-Stack Developer"/>
        <AboutContent/>
        <Footer/>
    </div>
}

export default About;
