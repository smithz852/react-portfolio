import React from "react"
import headshot from '../assets/IMG_1304.jpg'
import lbLogo from '../assets/lbState.webp'
import uclaLogo from '../assets/uclaLogo.png'

export function Bio() {
  return (
    <>
    <h2>Snapshot</h2>
  <div className="snapshotContainer">
  <div className="flex" style={{justifyContent: "space-evenly"}}>
    <img id="portrait" src={headshot} alt="Picture of Zach" />
    <div className="snapshotTopics">
      <div>
         <ul className="snapshotUl">
          <div className="snapshotFlex">
          <h4>B.S. in Business Management</h4>
          <div className="logoContainer">
          <img src={lbLogo} alt="CSULB Logo" />
          </div>
          </div>
          <div className="snapshotFlex">
            <h4>Fullstack Web Development Certificate</h4>
            <div className="logoContainer">
            <img src={uclaLogo} alt="UCLA Logo" />
            </div>
          </div>
          <div className="snapshotFlex">
        <h4>Industry Experience In:</h4>
         <ul style={{display: "block"}}>
          <div className="workHistoryLi">
          <li>Automotive</li>
          <li>Music Marketing</li>
          <li>Restaurant Project Management</li>
          <li>Hospitality</li>
          <li>Manufacturing</li>
          </div>
         </ul>
        </div>
        <div className="snapshotFlex">
        <p className="bioCloser">Strong growth mindset with a multide of hobbies and pastimes</p>
        <button>Read Full Bio</button>
        </div>
         </ul>
      </div>
    </div>
  </div>
</div>
</>
  )
}