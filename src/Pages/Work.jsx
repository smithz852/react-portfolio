import React from "react";
import { Link } from 'react-router-dom'
import sportsSquares from '../assets/sportSquares.png'
import recipeFinder from '../assets/recipeFinder.png'
import pocketporridge from '../assets/pocketporridge.png'
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
          <a href="https://github.com/KyleGru/sports-squares.git">
         <img src={sportsSquares} className="card myButton"/>
         </a>
          <div className="card-placeholder card-descr">
            <span className="project-descr">Sports Squares</span>
          </div>
        </div>
        <div className="container">
          <a href="https://github.com/smithz852/recipe-finder.git">
        <img src={recipeFinder} className="card myButton"/>
        </a>
          <div className="card-placeholder card-descr"><span className="project-descr">Recipe Finder</span> 
          </div>
        </div>
        <div className="container">
          <a href="https://github.com/KyleGru/pocket-porridge">
        <img src={pocketporridge} className="card myButton"/>
        </a>
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
          <a href="https://github.com/smithz852/coding-quiz.git">
         <img src={codingQuiz} className="card myButton"/>
         </a>
          <div className="card-placeholder card-descr">
            <span className="project-descr">Coding Quiz</span>
          </div>
        </div>
        <div className="container">
          <a href="https://github.com/smithz852/readme-generator.git">
        <img src={readmeGenerator} className="card myButton"/>
        </a>
          <div className="card-placeholder card-descr"><span className="project-descr">Readme Generator</span> 
          </div>
        </div>
        <div className="container">
          <a href="https://github.com/smithz852/ecommerce-app.git">
        <img src={ecommCopy} className="card myButton"/>
        </a>
          <div className="card-placeholder card-descr"><span className="project-descr">e-Commerce API</span>
              </div>
        </div>
        <div className="container">
          <a href="https://github.com/smithz852/weather-forecast.git">
        <img src={weatherApp} className="card myButton"/>
        </a>
          <div className="card-placeholder card-descr"><span className="project-descr">Weather App</span> 
          </div>
        </div>
        <div className="container">
          <a href="https://github.com/smithz852/password-generator.git">
        <img src={passwordGenerator} className="card myButton"/>
        </a>
          <div className="card-placeholder card-descr"><span className="project-descr">Password Generator</span> 
          </div>
        </div>
        <div className="container">
          <a href="https://github.com/smithz852/social-network-api.git">
        <img src={socialApi} className="card myButton"/>
        </a>
          <div className="card-placeholder card-descr"><span className="project-descr">Social Network API</span> 
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}