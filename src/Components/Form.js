import "./FormStyles.css"

import React from "react";

const Form = () => {
  return (
      <div className="form">
          <form>
              <label>Your Name</label>
              <input type="text" placeholder="Steve David"></input>
              <label>Email</label>
              <input type="email" placeholder="example@email.com"></input>
              <label>Subject</label>
              <input type="text" placeholder="Type your subject here"></input>
              <label>Message</label>
              <textarea rows="6" placeholder="Type your message here"/>
              <button className="btn">Submit</button>
          </form>
      </div>
  );
};

export default Form;
