import React from "react";
import Links from "./Links";
import user from "../data/user";

function paragraph(props){
  if (!props){
    return null
  }
  else {
    return <p>{props}</p>
  }
}


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {paragraph(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default About;
