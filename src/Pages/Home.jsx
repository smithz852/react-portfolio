import { useState } from 'react'
import '../App.css'
import React from "react";
import { Bio } from '../Components/Bio'
import { Projects } from '../Components/Projects'

export function Home() {
  return (
    <>
    <Bio />
  <Projects />
    </>
  )
  
}