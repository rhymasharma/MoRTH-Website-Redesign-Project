import React from 'react';
import '../styles/Navbar.css'; 
import HomeIcon from './home-icon.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div>
        <ul className="nav-links">
          <li><a href="https://parivahan.gov.in/parivahan//en"><img src={HomeIcon} alt="Home" /> Home</a></li>
          <li>|</li>
          <li><a href="https://parivahan.gov.in/parivahan//en/content/about-us">About Us</a></li>
          <li>|</li>
          <li id="online-services-menu"><a href="#">Online Services</a>
            <ul id="dropdown-services">
              <li><a href="https://parivahan.gov.in/parivahan//en/content/vehicle-related-services">Vehicle Related Services</a></li>
              <li><a href="https://parivahan.gov.in/parivahan//en/content/permit-related-services">Permit Related Services</a></li>
              <li><a href="https://sarathi.parivahan.gov.in/sarathiservice">Driving License Related Services</a></li>
            </ul>
          </li>
          <li>|</li>
          <li id="info-services-menu"><a href="#">Informational Services</a></li>
          <li>|</li>
          <li id="info-services-menu"><a href="#">Dashboard & Report</a></li>
          <li>|</li>
          <li id="info-services-menu"><a href="#">External Links</a></li>
          <li>|</li>
          <li id="info-services-menu"><a href="#">Public Media</a></li>
          <li>|</li>
          <li id="info-services-menu"><a href="#">Achievements</a></li>
        </ul>
        </div>
        <div className="right-section">
          <div className="language-dropdown">
            <select>
              <option value="english">English</option>
              <option value="spanish">Hindi</option>
            </select>
          </div>
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;