import React from "react";
// import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Filler } from './Filler'
import 'bootstrap/dist/css/bootstrap.min.css';



export function Projects() {
  return (
    <>
    <h2>Projects</h2>
    <div className="carousel-container">
    <Carousel>
      <Carousel.Item>
        <Filler text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Filler text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Filler text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}
