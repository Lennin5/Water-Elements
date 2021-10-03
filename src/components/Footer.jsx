import '../assets/css/Footer.css';
import React from 'react';

import FacebookIcon from "../assets/img/facebook-icon.png";
import TwitterIcon from "../assets/img/twitter-icon.png";
import InstagramIcon from "../assets/img/instagram-icon.png";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-ms-12 "></div>

          <div className="col-lg-4 col-md-4 col-ms-12 iconosDiv">
            <a href="#" className="enlaceFooter">
              <img src={FacebookIcon} className="iconos" />
            </a>
            <a href="#" className="enlaceFooter">
              <img src={TwitterIcon} className="iconos" />
            </a>
            <a href="#" className="enlaceFooter">
              <img src={InstagramIcon} className="iconos" />
            </a>
          </div>

          <div className="col-lg-4 col-md-4 col-ms-12 "></div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-ms-12 "></div>

          <div className="col-lg-4 col-md-4 col-ms-12 ">
            <p className="informationFooter">©2021 Water Elements</p>
          </div>

          <div className="col-lg-4 col-md-4 col-ms-12 "></div>
        </div>
      </footer>
    );
}

export default Footer;


