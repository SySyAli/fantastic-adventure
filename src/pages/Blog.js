import React, { Component } from 'react';
import './Blog.css';
import Footer from './footer.js'; 
import {
  Jumbotron
} from 'reactstrap';

class Blog extends Component {
  render() {
    return (
<>
<div className="blogheader">
  <h2>Drone Earth Blog</h2>
</div>

<div className="row">
  <div className="leftcolumn">
    <div className="card">
      <h2>Prototypes of Drone Model!</h2>
      <h5>Title description, Dec 7, 2017</h5>
      <div className="fakeimg dundo">Image</div>
      <p>Drones &copy; Syed Ali</p>
      <p>We are starting to prototype our drones. Testing will finish tommorrow.</p>
    </div>
    <div className="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <div className="fakeimg dundo">Image</div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
  </div>
  <div className="rightcolumn">
    <div className="card">
      <h2>About Us</h2>
      <div className="fakeimg hundo">Image</div>
      <p>The entire team together in unity</p>
    </div>
    <div className="card">
      <h3>Popular Post</h3>
      <div className="fakeimg">Image</div>
      <div className="fakeimg">Image</div>
      <div className="fakeimg">Image</div>
    </div>
    <div className="card">
      <h3>Follow Me</h3>
      <p>Some text..</p>
    </div>
  </div>
</div>
        <Footer/>
        </>
    );
  }
}

export default Blog;
