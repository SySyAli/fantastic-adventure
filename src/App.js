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
import AboutPage from './pages/AboutPage';

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
          <Navbar color="light" light>
            <NavbarBrand href="#/">Starter Kit</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
           <Collapse isOpen={!collapsed} navbar>
            <Nav>
              <NavItem>
                <NavLink href="#/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.we-connect-the-dots.org/">WCTD Home</NavLink>
              </NavItem>
            </Nav>
            </Collapse>
          </Navbar>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
