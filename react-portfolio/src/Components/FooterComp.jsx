import React from "react";
import { Link } from 'react-router-dom'

export function FooterComp() {
  return (
    <footer>
  <div className="footer-block">
    <h3 id="Contact-Me">Contact Me</h3>
    <ul className="contact-me">
      <li>(805) 760-3230</li>
      <li>Email</li>
      <li> Github</li>
      <li>LinkedIn</li>
    </ul>
  </div>
</footer>
  )
}