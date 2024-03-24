import React from "react";
// import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Filler } from './Filler'
import recipeFinder from '../assets/recipeFinder.png'
import sportSquares from '../assets/sportSquares.png'
import ecommApi from '../assets/ecommApi.png'
import 'bootstrap/dist/css/bootstrap.min.css';



export function Projects() {
  return (
    <>
    <h2>Projects</h2>
    <div className="carousel-container">
    <Carousel>
      <Carousel.Item>
        <a href="https://github.com/smithz852/recipe-finder.git">
        <img src={recipeFinder} alt="Picture of recipe finder website" />
        </a>
        <Carousel.Caption>
          <h3>Recipe Finder</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://github.com/KyleGru/sports-squares.git">
        <img src={sportSquares} alt="Picture of sport squares app" />
        </a>
        <Carousel.Caption>
          <h3>Sport Squares</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://github.com/smithz852/ecommerce-app.git">
        <img src={ecommApi} alt="Image of ecommerce api" />
        </a>
        <Carousel.Caption>
          <h3>eCommerce API</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}
