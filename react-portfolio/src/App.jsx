import React from 'react';
import { useState } from 'react'
import './App.css'
import { PortfolioNavbar } from './Components/PortfolioNavbar'
import { Bio } from './Components/Bio'
import { Projects } from './Components/Projects'

function App() {
  return (
    <>
      <PortfolioNavbar />
      <Bio />
      <Projects />
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
