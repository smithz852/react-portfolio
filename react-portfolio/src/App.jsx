import React from 'react';
import { useState } from 'react'
import './App.css'
import { PortfolioNavbar } from './Components/PortfolioNavbar'

function App() {
  return (
    <>
      <PortfolioNavbar />
      <div>
        <div className="flex">
          <img id="portrait" src='./assets/IMG_1304' alt="Picture of Zach" />
          <div>
            <h2 id="About-Me" style={{width: "400px"}}>About Me</h2>
            <div className="bio-text">
              <p>I'm currently pursuing a full stack web development certification through UCLA, with a planned completion
                date of April 11, 2024.
                Prior to this, I graduated in 2021 with a Bachelor of Science in Business Management from CSULB. Prior to,
                during, and after graduating, I've gained experience in various industries.
                This includes music marketing, Google Adwords marketing, hospitality, restaurant project management, and the
                automotive industry. </p>
              <p>I enjoy working creatively and am constantly striving to further my knowledge so I may achieve my goals.
                I'm excited about the potential a web development career provides
                and cannot wait to begin this journey! </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex work-sect">
      <h2 id="Work" className="work-sidebar">Work</h2>
      <div className="work-flexbox">
        <div className="container">
          <a href="./Assets/HTMLs/ComingSoon.html"> <img src="./assets/102_50-c.jpg" className="card myButton"/></a>
          <div className="card-placeholder card-descr">
            <span className="project-descr">Placeholder Project:</span> <span className="project-text">Content TBD</span>
          </div>
        </div>
        <div className="container">
          <a href="./Assets/HTMLs/ComingSoon.html"> <img src="./Assets/Media/GOPR1678.jpg" className="myButton card"/> </a>
          <div className="card-placeholder card-descr"><span className="project-descr">Placeholder Project:</span> <span
              className="project-text">Content TBD</span></div>
        </div>
        <div className="container">
          <a href="./Assets/HTMLs/ComingSoon.html"> <img src="./Assets/Media/GOPR1678.jpg" className="card myButton"/> </a>
          <div className="card-placeholder card-descr"><span className="project-descr">Placeholder Project:</span> <span
              className="project-text">Content TBD</span></div>
        </div>
        <div className="container">
          <a href="./Assets/HTMLs/ComingSoon.html"> <img src="./Assets/Media/102_50-c.jpg" className="card myButton"/></a>
          <div className="card-placeholder card-descr"> <span className="project-descr">Placeholder Project:</span> <span
              className="project-text">Content TBD</span></div>
        </div>
        <div id="top-container">
          <a href="https://smithz852.github.io/01-module/"><img src="./Assets/Media/Screenshot 2023-10-30 154641.png"
              id="top-card" className="myButton"/></a>
          <div className="card-top top-descr"><span className="project-descr">Accessibility Optimization:</span> <span
              className="project-text">HTML & CSS</span></div>
        </div>
      </div>
    </div>
<footer>
  <div className="footer-block">
    <h3 id="Contact-Me">Contact Me</h3>
    <ul className="contact-me">
      <li><a href="Tel: 805-760-3230"> (805) 760-3230</a></li>
      <li><a href="mailto:zachsmith852@gmail.com"> Email</a></li>
      <li><a href="https://github.com/smithz852"> Github</a></li>
      <li><a href="https://www.linkedin.com/in/zachary-smith-610a32178/"> LinkedIn</a></li>
    </ul>
  </div>
</footer>
    </>
  );
}

 

export default App
