import React from "react";
import logo from "../Assets/nike-logo.png";
import "../conf/Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import '@fontsource/poppins'; // Default 400 weight
import '@fontsource/poppins/600.css'; // Optional: specific weight




function Nav() {
  return (
    <>
      <div className="container navBar">
        <div className="row">
          <div class="icon" className="col-4">
            <img src={logo} alt="niki" />
          </div>
          <div className="col-4 main">
            <a href="#MENU">MENU</a>
            <a href="#LOCATION">LOCATION</a>
            <a href="#ABOUT">ABOUT</a>
            <a href="#CONTACT">CONTACT</a>
          </div>
           <div className="col-4 login" >
            {/* <a href="#login" className="butt">Login</a> */}
             <Button variant="danger">Login</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
