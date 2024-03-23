import React from 'react';
import { useState } from 'react'
import './App.css'
import { PortfolioNavbar } from './Components/PortfolioNavbar'
import { Bio } from './Components/Bio'

function App() {
  return (
    <>
      <PortfolioNavbar />
      <Bio />
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
