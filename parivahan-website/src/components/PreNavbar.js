import React,{useState} from 'react'
import "../styles/PreNavbar.css"

import MoonIcon from './moon-icon.png';
import SunIcon from './sun-icon.png'; 
import DownArrow from './down-arrow.png';

const PreNavbar = () => {
  const [fontSize, setFontSize] = useState(16); // Initial font size
  const [theme, setTheme] = useState('light'); 
  
  const decreaseFontSize = () => setFontSize(fontSize - 1);
  const increaseFontSize = () => setFontSize(fontSize + 1);
  const restoreFontSize = () => setFontSize(16);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <div className="preNav">
      <div className="screenReader">
        <a href="https://parivahan.gov.in/parivahan//content/screen-reader-access">
          <img src={DownArrow} alt="arrow"></img>Screen Reader Access
        </a>
      </div>
      <div className="right">
        <div className="fontSize">
          <button className="iconButton" onClick={decreaseFontSize}>A-</button>
          <button className="iconButton" onClick={restoreFontSize}>A</button>
          <button className="iconButton" onClick={increaseFontSize}>A+</button>
        </div>
        <div className="searchBox">
          <input type="text" placeholder="Search" />
        </div>
        <div className="darkMode">
          <button onClick={toggleTheme}>
            <img src={SunIcon} alt="Light Mode" />
          </button>
          <button onClick={!toggleTheme}>
            <img src={MoonIcon} alt="Dark Mode" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PreNavbar