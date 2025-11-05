import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../conf/Banner.css"
import '@fontsource/poppins'; // Default 400 weight
import '@fontsource/poppins/600.css'; // Optional: specific weight
import Button from "react-bootstrap/esm/Button";
import logo1 from '../Assets/amazon.png';
import logo2 from '../Assets/flipkart.png';
import nike from '../Assets/image.png'



function Banner() {
  return (
    <>
      <div className="container">
        <div className="row">
         
          <div className="col-6 feame1">
            <p className="bannerText">YOUR FEET DESERVE <br/> THE BEST</p>
           <div className="hero-description ">
            <p className="downText">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          </div>
          <div className="downButt">
            <Button  variant="danger">Shop Now</Button>
             <Button  variant="outline-light" className="b2">Category</Button>
          </div>
          <div>
            <p className="g1">Also Available On</p>
          </div>
          <div className="mini-logo">
            <img src={logo2} alt="flipkart" className="logo-2" />
            <img src={logo1} alt="amazon" className="logo-1" />
          </div>
          </div>
          <div className="col-5 feame2">
          <img src={nike} alt="shoes"  className="nike"/>
          </div>
          </div>
        </div>
      
    </>
  );
}

export default Banner;
