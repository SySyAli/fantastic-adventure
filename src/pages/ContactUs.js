import React, { Component } from 'react';
import './ContactUs.css';
import Footer from './footer.js'; 
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class ContactUs extends Component {
  render() {
    return (
        <>
                       <div className="FooterButton"> 
                <a href="https://twitter.com/DroneEarth" className="fa fa-twitter"></a>
                <a href="https://www.youtube.com/channel/UCWzZAzNOJlZXIbP0FVjM46w?" className="fa fa-youtube"></a>
                <a href="https://www.instagram.com/official_drone_earth/" className="fa fa-instagram"></a>
            </div>
       <Form className="form">
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="johndoe@example.com" />
          </FormGroup>
        </Col>

      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>

      <Button>Sign In</Button>
    </Form>
        <Footer/>
        </>
    );
  }
}

export default ContactUs;
