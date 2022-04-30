import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="header-contianer">
        <h1 className="about-header">
          About
        </h1>
      </div>
      <div className="image-container">
        <img
          className="about-image-1"
          src="https://le-cdn.hibuwebsites.com/f5666827ac6141668bc3e640a0e4d609/dms3rep/multi/opt/Hero2-1920w.jpg"
          alt="dancing woman"
        ></img>
      </div>
      <div className="discription-container">
        <p className="about-discription">
          Ever wanted to join a dance class, but were too self-conscious about
          your skill level compared to everyone else? <br />
          Maybe you're an advanced to intermediate dancer looking for private
          training but cring ate the prices mos studies have to offer? Well, look no further!<br/>
          <br/>
          <em>Like No One's Watching</em> is a web application that connects users with all levels of dance skills to dance teachers all over the world!
          <br/>
          Whether you're <b>Novice, Beginner, Advance or Intermediate</b>, we have a plethora of dance instructors for all sorts of dance background for your choosing.
        </p>
      </div>
  
    </div>
  );
};

export default About;
//&nbsp;