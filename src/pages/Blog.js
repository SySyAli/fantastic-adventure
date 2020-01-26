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
      <h5>Jan 26, 2020</h5>
      <div className="fakeimg dundo"><img src="https://imgur.com/g88Ca29"/>
      </div>
      <p>Drones &copy; Syed Ali</p>
      <p>We are starting to prototype our drones. Testing will finish tommorrow.</p>
    </div>
    <div className="card">
      <h2>Max code!</h2>
      <h5>Jan 26, 2020</h5>
      <div className="fakeimg dundo"><img src="https://i.imgur.com/SN0iDux.jpg"/></div>
      <p>Max coding!!!</p>
    </div>
  </div>
  <div className="rightcolumn">
    <div className="card">
      <h2>About Us</h2>
      <div className="fakeimg hundo"><img src="https://i.imgur.com/108fSvG.jpg"/></div>
      <p>The entire team together in unity.</p>
    </div>
    <div className="card">
      <h3>Popular Post</h3>
      <div className="fakeimg">Image</div>
      <div className="fakeimg">Image</div>
      <div className="fakeimg">Image</div>
    </div>
  </div>
</div>
        <Footer/>
        </>
    );
  }
}

export default Blog;
