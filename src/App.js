import React, { Component } from 'react';

import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom';

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
} from 'reactstrap';

import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import ProductInfo from './pages/ProductInfo';

class App extends Component {
  constructor (props){
    super(props)
    this.state= {collapsed:true}
    this.toggleNavbar=this.toggleNavbar.bind(this)
  }
  toggleNavbar(){
    let{collapsed}=this.state
    if (collapsed===true){collapsed=false}
    else collapsed=true
    this.setState({collapsed})
  }
  render() {
    const{collapsed}=this.state
    
    return (
      <Router>
        <div className="App">
          <Navbar color="light" light className="navbar">
            <NavbarBrand href="#/" className='header'>Drone Green</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
           <Collapse isOpen={!collapsed} navbar>
            <Nav>
              <NavItem>
                <NavLink href="#/Blog" className='header'>Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/ProductInfo" className='header'>Product Information</NavLink>
              </NavItem>
            </Nav>
            </Collapse>
          </Navbar>
          <Route exact path="/" component={HomePage} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Blog" component={Blog} />
        <div>
        {/*FOOTER FOOTER*/}  
        </div>  
        </div>
      </Router>
    );
  }
}

export default App;
