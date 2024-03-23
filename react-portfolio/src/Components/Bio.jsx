import React from "react"

export function Bio() {
  return (
    <>
  <div>
  <div className="flex">
    <img id="portrait" src='./assets/IMG_1304' alt="Picture of Zach" />
    <div>
      <h2 id="About-Me" style={{width: "400px"}}>About Me</h2>
      <div className="bio-text">
        <p>I'm currently pursuing a full stack web development certification through UCLA, with a planned completion
          date of April 11, 2024.
          Prior to this, I graduated in 2021 with a Bachelor of Science in Business Management from CSULB. Prior to,
          during, and after graduating, I've gained experience in various industries.
          This includes music marketing, Google Adwords marketing, hospitality, restaurant project management, and the
          automotive industry. </p>
        <p>I enjoy working creatively and am constantly striving to further my knowledge so I may achieve my goals.
          I'm excited about the potential a web development career provides
          and cannot wait to begin this journey! </p>
      </div>
    </div>
  </div>
</div>
</>
  )
}