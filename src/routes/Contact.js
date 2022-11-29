import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Img2 from "../Components/Img2";
import Form from "../Components/Form";

const Contact = () =>{
    return <div>
        <Navbar/>
        <Img2 heading="CONTACT." text="Lets have a chat"/>
        <Form/>
        <Footer/>
    </div>
}

export default Contact;
