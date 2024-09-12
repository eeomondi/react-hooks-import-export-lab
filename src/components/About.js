// src/components/About.js
import React from 'react';
import {image} from "../data/user";

const About = () => {
  return (
  <div>
    <img src = {image} alt="profile"/> 
    <p>About </p>
    </div>
  );
};

export default About;


/*import React from "react";

const About = () =>{
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}*/
