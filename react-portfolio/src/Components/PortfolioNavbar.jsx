import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function PortfolioNavbar() {

const navigate = useNavigate()
function changePage() {
  navigate(path);
}

  return (
  <>
  <header className="flex">
        <h1>Zachary Smith</h1>
        <ul>
          <li>
          <Link to='/AboutMe' onClick={() => {
              let path = '/AboutMe'
              changePage(path);
          }} >
            About Me
            </Link>
          </li>
          <li> Work</li>
          <li>Contact Me</li>
          <li>Resume</li>
        </ul>
      </header>
      </>
      )
}