import React, { Component } from 'react';
import Footer from './footer.js';


class HomePage extends Component {
  render() {
    return (
     <> 
      <div className="parallax"></div>
      <div className="ABOUTUSCONT">
        <div className="AboutUs"><p>  About Us</p></div>
      <div className="AboutUsheader">
       <div className="paragraph">
        <div className="ui segment">
          <div className="ui two column very relaxed grid">
            <div className="column paragraph">
              <p>The world generates at least 3.5 million tons of plastic and solid waste a day. That’s approximately 42 million tons of waste per year. At Drone Earth, we aim to drastically reduce that number all the way down to zero using the power of drones. Using drones, we plan to collect garbage that is being littered all over the Earth. The drones are fully automatic and are lightweight. Most garbage that is collected by the drones is recycled or composted. The garbage that can’t be recycled or composted will be outsourced to responsible waste management companies. Drones are also more energy efficient than standard garbage disposal trucks and these drones could potentially replace them. This is exactly what we plan to do. In the future, we plan to use these waste-collecting drones to completely replace garbage disposal trucks for good.  </p>
              <div className="garbage"><img src="https://pbs.twimg.com/media/EPLlggOXUAEWn6b?format=jpg&name=medium" width="250px" height="250px"/></div>
            </div>
            <div className="column paragraph">

            </div>
          </div>
        </div>    
      </div>
      </div>
      </div>
      <div class="twoparallax"></div>
          <div className="AboutUs team"><h1>Meet the Team</h1>
          <p>Cyril Mathew - An energetic individual who is passionate about making sure that his voice is heard by the masses. He is our head of Public Relations.</p>
            <p>Bram Cheevings - A talented young man who has a talent for making, anything, even trash, look good. He is our Graphic designer.</p>
            <p>Syed Ali - The visionary high-schooler who was the driving force behind making our dream a reality. He is our Lead Programmer.</p>
            <p>Alvin Paul - A charismatic young man who was crucial in turning DroneEarth from a Dream into a reality. He is the Assistant Programmer.</p>  
          </div>
      <Footer/>
    </>

    );
  }
}

export default HomePage;
