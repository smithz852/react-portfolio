import React from "react";
import fishImg from '../assets/fishImg.jpg'
import sportsSquares from '../assets/sportSquares.png'
import recipeFinder from '../assets/recipeFinder.png'
import tbdPic from '../assets/tbd.jpg'
import codingQuiz from '../assets/codingQuiz.png'
import readmeGenerator from '../assets/readmeGenerator.png'
import ecommCopy from '../assets/ecommCopy.png'
import weatherApp from '../assets/weatherApp.png'
import passwordGenerator from '../assets/passwordGenerator.png'
import socialApi from '../assets/socialApi.png'

export function Work() {
  return(
    <>
    <div className="projectContainer">
    <div className="flex work-sect">
      <h2 id="Work" className="work-sidebar workTitle">Projects</h2>
      <div className="work-flexbox">
        <div className="container">
         <img src={sportsSquares} className="card myButton"/>
          <div className="card-placeholder card-descr">
            <span className="project-descr">Sports Squares</span>
          </div>
        </div>
        <div className="container">
        <img src={recipeFinder} className="card myButton"/>
          <div className="card-placeholder card-descr"><span className="project-descr">Recipe Finder</span> 
          </div>
        </div>
        <div className="container">
        <img src={tbdPic} className="card myButton"/>
          <div className="card-placeholder card-descr"><span className="project-descr">Meme Generator</span>
              </div>
        </div>
      </div>
    </div>
    </div>

    <div className="appContainer">
    <div className="flex work-sect">
      <h2 id="Work" className="work-sidebar workTitle">Apps</h2>
      <div className="work-flexbox">
        <div className="container">
         <img src={codingQuiz} className="card myButton"/>
          <div className="card-placeholder card-descr">
            <span className="project-descr">Coding Quiz</span>
          </div>
        </div>
        <div className="container">
        <img src={readmeGenerator} className="card myButton"/>
          <div className="card-placeholder card-descr"><span className="project-descr">Readme Generator</span> 
          </div>
        </div>
        <div className="container">
        <img src={ecommCopy} className="card myButton"/>
          <div className="card-placeholder card-descr"><span className="project-descr">e-Commerce API</span>
              </div>
        </div>
        <div className="container">
        <img src={weatherApp} className="card myButton"/>
          <div className="card-placeholder card-descr"><span className="project-descr">Weather App</span> 
          </div>
        </div>
        <div className="container">
        <img src={passwordGenerator} className="card myButton"/>
          <div className="card-placeholder card-descr"><span className="project-descr">Password Generator</span> 
          </div>
        </div>
        <div className="container">
        <img src={socialApi} className="card myButton"/>
          <div className="card-placeholder card-descr"><span className="project-descr">Social Network API</span> 
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}