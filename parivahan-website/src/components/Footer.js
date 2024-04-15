import React from 'react'
import Foot from './Footer.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
        <img src={Foot} alt='footer' width='100%'></img>
    </div>
  )
}

export default Footer