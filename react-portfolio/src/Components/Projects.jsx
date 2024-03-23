import React from "react";

export function Projects() {
  return (
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
  )
}