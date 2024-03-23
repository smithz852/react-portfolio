import React from "react"

export function Bio() {
  return (
    <>
  <div>
  <div className="flex" style={{justifyContent: "space-evenly"}}>
    <img id="portrait" src='./assets/IMG_1304' alt="Picture of Zach" />
    <div>
      {/* <h2 id="About-Me" style={{width: "400px"}}>Snapshot</h2> */}
      <div className="bio-text">
         <ul className="snapshotUl">
          <div className="snapshotFlex">
          <h4>B.S. in Business Management</h4>
          <h3>LB Logo Placeholder</h3>
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
        <h4>Strong growth mindset with a multide of hobbies and pastimes</h4>
        <h3>Image placeholder</h3>
        </div>
         </ul>
      </div>
    </div>
  </div>
</div>
</>
  )
}