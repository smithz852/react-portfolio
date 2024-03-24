import React from 'react';
import { useState } from 'react'
import './App.css'
import { PortfolioNavbar } from './Components/PortfolioNavbar'
import { Bio } from './Components/Bio'
import { Projects } from './Components/Projects'
import { FooterComp } from './Components/FooterComp'

function App() {
  return (
    <>
      <PortfolioNavbar />
      <Bio />
      <Projects />
      <FooterComp />
    </>
  );
}

 

export default App
