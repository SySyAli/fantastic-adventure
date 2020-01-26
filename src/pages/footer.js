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
                <div className="column">
                <p>Home</p>
                <p>Blog</p>
                <p>Contact Information</p>
                </div>
                <div className="column">
                <p>Contact Us</p>
                <p>Donations</p>
                </div>
            </div>
            </div>
               <div className="FooterButton"> 
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-youtube"></a>
                <a href="#" className="fa fa-instagram"></a>
            </div>
            <div className="copyright">
            <h6>180 Micheal Drive | Syosset, NY 11791 | 800-888-8888 | wearedroneearth@gmail.com</h6>
            <h6>All site content copyright © 2020 Drone Earth | Drone Earth. All rights reserved.</h6>
            </div>
          </>
        </CardBody>
      </Card>
    </div>
  );
};

export default Footer;