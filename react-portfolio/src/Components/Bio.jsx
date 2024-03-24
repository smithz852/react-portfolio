import React from "react"
import headshot from '../assets/IMG_1304.jpg'
import lbLogo from '../assets/lbState.webp'
import uclaLogo from '../assets/uclaLogo.png'

export function Bio() {
  return (
    <>
  <div className="snapshotContainer">
  <div className="flex" style={{justifyContent: "space-evenly"}}>
    <img id="portrait" src={headshot} alt="Picture of Zach" />
    <div className="snapshotTopics">
      <div className="marginAdjustment">
         <ul className="snapshotUl">
          <div className="snapshotFlex">
          <p className="achievments">B.S. in Business Management</p>
          <div className="logoContainer">
          <img src={lbLogo} alt="CSULB Logo" />
          </div>
          </div>
          <div className="snapshotFlex">
            <p className="achievments">Fullstack Web Development Certificate</p>
            <div className="logoContainer">
            <img src={uclaLogo} alt="UCLA Logo" />
            </div>
          </div>
          <div className="snapshotFlex">
        <p className="achievments">Industry Experience In:</p>
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
        <p className="bioCloser">Passionately goal-oriented with an unwavering commitment to personal growth, complemented by a diverse array of interests and an insatiable thirst for learning.</p>
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