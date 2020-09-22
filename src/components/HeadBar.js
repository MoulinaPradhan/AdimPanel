import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

class HeadBar extends Component {
  render() {
    return (
      <div>
        <Navbar style={{boxShadow:"#00000045 -1px 1px 20px 0px",height:47}} collapseOnSelect expand="lg" bg="light" variant="dark">
          <Navbar.Brand href="#home" style={{color:"black"}}><img src="https://www.flaticon.com/svg/static/icons/svg/57/57106.svg" className="logo"/>
          <img style={{marginRight:10}} src="https://www.flaticon.com/svg/static/icons/svg/545/545766.svg" className="logo"/><span style={{position:"absolute",top:7}}>Clove</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              <img style={{left:"76%"}} src="https://www.flaticon.com/svg/static/icons/svg/565/565590.svg" className="icons"/>
              </Nav.Link>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              <img  style={{left:"79%"}} src="https://www.flaticon.com/svg/static/icons/svg/126/126472.svg" className="icons"/>
              </Nav.Link>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              <img style={{left:"82%"}} src="https://www.flaticon.com/svg/static/icons/svg/709/709846.svg" className="icons"/>
              </Nav.Link>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              <img src="https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="icons" id="profile-icon"/>
              </Nav.Link>
              <Nav.Link href="#deets" style={{color:"black",position:"absolute",left:"88%"}}>Madelyn Shane <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:0,color:"grey"}} /> </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
             
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default HeadBar;
