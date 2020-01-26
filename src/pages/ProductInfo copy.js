import React, { Component } from 'react';
import './ProductInfo.css';
import Footer from './footer.js'; 

class ProductInfo extends Component {
  render() {
    return (
        <>
          <div class="ParallaxVideo">
            <video autoplay muted loop >
              <source src="https://i.imgur.com/esOf8gS.mp4" type="video/mp4"></source>
            </video>

        </div>
        <div className="productinfo">
        <p>Product Information</p>
        <h3>The drones we are going to manufacture will be fairly large, around 5 feet from one propeller to the other. This will give it the lifting power needed to collect and retrieve recyclable garbage. Anything that is not recyclable, well also be retrieved if it is non decomposable. Food waste will be composted, and the compost will be put into packets with seeds inside that the drones will scatter to help grow trees. Electronic waste will be reused and recycled to make more drones when possible, and when not it will be sent to proper electronic waste disposal companies. This insures all waste the drones collect goes to use, or is properly disposed of. To help raise funds the drones will also be used to collect trash from homes if the owners of said home are subscribed to our trash collection service. Due to many factors in nature that could damage the drones, they will be waterproof and automatically programmed to seek shelter in heavy storms. To ensure that any damaged drones do not contribute to the electronic waste in the environment, a tracking chip will be placed in all drones to allow for retrieval should they be damaged. As our funds grow drone charging centers as well as waste collection centers will be made to handle the increase in waste.</h3>
        </div>
        <Footer/>
        </>
    );
  }
}

export default ProductInfo;
