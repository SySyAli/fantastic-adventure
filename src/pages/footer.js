import React from 'react';
import { Card, CardBody} from 'reactstrap';

const Footer = (props) => {
  return (
    <div>
      <Card>
 
        <CardBody>
          <>
            <div className="ui segment">
            <div className="ui two column very relaxed grid">
                <div className="footer">
                <a href="#/">Home </a>

                <a href="#/Blog">Blog </a>

                <a href="#/ProductInfo">ProductInformation </a>

                <a href="#/ContactUs">Contact </a>
                </div>
                <div className="column">

                </div>
            </div>
            </div>
               <div className="FooterButton"> 
                <a href="https://twitter.com/DroneEarth" className="fa fa-twitter"></a>
                <a href="https://www.youtube.com/channel/UCWzZAzNOJlZXIbP0FVjM46w?" className="fa fa-youtube"></a>
                <a href="https://www.instagram.com/official_drone_earth/" className="fa fa-instagram"></a>
            </div>
            <div className="copyright">
            <h6>180 Michael Drive | Syosset, NY 11791 | 800-888-8888 | wearedroneearth@gmail.com</h6>
            <h6>All site content copyright © 2020 Drone Earth | Drone Earth. All rights reserved.</h6>
            </div>
          </>
        </CardBody>
      </Card>
    </div>
  );
};

export default Footer;