import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import resumePdf from '../assets/resume2024.pdf'

export function PortfolioNavbar() {

const navigate = useNavigate()
function changePage() {
  navigate(path);
}

  return (
  <>
  <header className="flex">
        <h1><Link to='/' onClick={() => {
              let path = '/'
              changePage(path);
          }}>Zachary Smith</Link></h1>
        <ul>
          <li>
          <Link to='/AboutMe' onClick={() => {
              let path = '/AboutMe'
              changePage(path);
          }} >
            About Me
            </Link>
          </li>
          <li> <Link to='/Work' onClick={() => {
              let path = '/Work'
              changePage(path);
          }} >
            Work
            </Link></li>
          <li><Link to='/Contact' onClick={() => {
              let path = '/Contact'
              changePage(path);
          }} >
            Contact Me
            </Link></li>
          <li><a href={resumePdf} target='_blank'>Resume</a></li>
        </ul>
      </header>
      </>
      )
}