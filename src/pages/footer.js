import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

const Footer = (props) => {
  return (
    <div>
      <Card>
 
        <CardBody>
          <>
            <div class="ui segment">
            <div class="ui two column very relaxed grid">
                <div class="column">
                <p>Home</p>
                <p>Blog</p>
                <p>Contact Information</p>
                </div>
                <div class="column">
                <p>Contact Us</p>
                <p>Donations</p>
                </div>
            </div>
            </div>
               <div className="FooterButton"> 
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-youtube"></a>
                <a href="#" class="fa fa-instagram"></a>
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