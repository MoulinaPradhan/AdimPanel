import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faChartLine, faChevronDown, faCube, faBolt, faFileAlt, faFileArchive, faTextHeight, faChessBishop, faJournalWhills, faAlignCenter, faChartPie, faMap, faBook, faEye, faHeadphones } from '@fortawesome/free-solid-svg-icons';
class SideBar extends Component {
  render() {
    return (
      <div>
        <div id="sidebar">
          <ListGroup variant="flush" bg="dark">
          <ListGroup.Item style={{ backgroundColor: "#09243a" ,height:120}}>
          <img style={{height:70, width:70,marginRight:0,marginTop:10,top:1,left:"30%"}} src="https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="icons" id="profile-icon"/>
           <p style={{textAlign:"center",position:"relative",top:"80%",left:-6,marginTop:5}}>Madelyn Shane</p> 
           </ListGroup.Item>
             <ListGroup.Item style={{ backgroundColor: "#09243a" }}>
            <FontAwesomeIcon icon={faChartLine} style={{marginRight:10}} /> Dashboard 
            <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:60}} /> 
            </ListGroup.Item>
         <ListGroup.Item style={{ backgroundColor: "#09243a" }}>
         <FontAwesomeIcon icon={faCube} style={{marginRight:10}} /> Application <span style={{backgroundColor:"red",marginLeft:50,padding:"0px 5px",borderRadius:"50%",color:"white"}}>4</span>
            {/* <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:60}} />  */}
            </ListGroup.Item>       
            <ListGroup.Item style={{ backgroundColor: "#09243a" }}>
            <FontAwesomeIcon icon={faBolt} style={{marginRight:10}} /> Authentication
            <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:40}} /> 
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#09243a" }}>
            <FontAwesomeIcon icon={faFileAlt} style={{marginRight:10}} /> Pages
            <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:105}} /> 
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#09243a" }}>
            <FontAwesomeIcon icon={faFileArchive} style={{marginRight:10}} /> Components
            <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:55}} /> 
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#09243a" }}>
            <FontAwesomeIcon icon={faTextHeight} style={{marginRight:10}} />Content
            <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:90}} /> 
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#09243a" }}>
            <FontAwesomeIcon icon={faChessBishop} style={{marginRight:10}} /> Utilities
            <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:95}} /> 
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#09243a" }}>
            <FontAwesomeIcon icon={faJournalWhills} style={{marginRight:10}} /> Forms
            <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:95}} /> 
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#09243a" }}>
            <FontAwesomeIcon icon={faAlignCenter} style={{marginRight:10}} /> Tabies
            <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:95}} /> 
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#09243a" }}>
            <FontAwesomeIcon icon={faChartPie} style={{marginRight:10}} />Chart
            <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:100}} /> 
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#09243a" }}>
            <FontAwesomeIcon icon={faMap} style={{marginRight:10}} />Map
            <FontAwesomeIcon icon={faChevronDown}style={{marginLeft:110}} /> 
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#09243a" }}>
            <FontAwesomeIcon icon={faBook} style={{marginRight:10}} /> Documentation
            <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:30}} /> 
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#09243a" }}>
            <FontAwesomeIcon icon={faEye} style={{marginRight:10}} />Changelog
            <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:70}} /> 
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#09243a" }}>
            <FontAwesomeIcon icon={faHeadphones} style={{marginRight:10}} />Support
            <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:85}} /> 
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default SideBar;
