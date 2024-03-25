import turkey from '../assets/turkey.jpg'
import greece from '../assets/greece.jpg'
import mexico from '../assets/mexico.jpg'

export function AboutMe() {
  return (
    <>
    <div className="flex">
      <h1 className="bioHeader">About Me</h1>
      <div className="bioPage">
      <p>
         I am currently enrolled in a Full Stack Web Development certification program at UCLA, with an anticipated completion date of April 11, 2024. My academic 
         background includes earning a Bachelor of Science degree in Business Management from CSULB in 2021, and an Associates in Economics from Santa Barbara City College. Throughout my academic journey and beyond, 
         I have acquired diverse experience across multiple industries, encompassing music marketing, Google AdWords marketing, hospitality, restaurant project management, 
         and the automotive sector.
      </p>
      <p>
        On my free time, I enjoy a multide of hobbies, and am always looking for more. I believe that staying curious and pursuing different interest is a great way to 
        occupy ones time, while enabling us to learn a vast amount of new info both directly from the interest, and indirectly from all the lateral areas that encompass it.
        Some of my favorite hobbies include travellng, surfing, fishing, video games, and growing peppers. Now, I'm excited to add web development to the list!
      </p>
       <p>
       Embarking on this new venture into web development fills me with anticipation. 
       The realm of possibilities for learning and creation appears boundless. 
       I am resolute in my commitment to continuous learning, adamant on exploring new languages and projects, both personally and professionally.
       </p>
       <p className="bioSig">Zachary Smith</p>
    </div>
    </div>
    <div className="travelFlex">
      <div className="travelContainer">
        <h4>Turkey</h4>
      <img src={turkey} alt="" />
      </div>
      <div className="travelContainer">
        <h4>Greece</h4>
      <img src={greece} alt="" />
      </div>
      <div className="travelContainer">
        <h4>Mexico</h4>
      <img src={mexico} alt="" />
      </div>
    </div>
    </>
  );
}