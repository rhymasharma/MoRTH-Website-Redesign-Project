import React from 'react'
import '../styles/License.css';
import LicIcon from './Icon.png';

const License = () => {
  return (
    <div className='section'>
        <div className='section1'>
            <div className='heading'>
              <img src={LicIcon} className='logo1' alt='lic-logo' />
              <h4>License Related Services</h4>
            </div>
            <div className='ul-container'>
            <pre> • Driver's License     • Driving School     • Online Test     • Other Services </pre>
            {/* <ul>
                <li>Driver's/Learner's License</li>
                <li>Driving School</li>
                <li>Online Test/Appointment</li>
                <li>Other Services</li>
            </ul> */}
            </div>
            <div className='more-button-container'>
            <button className="more-button">More</button>
            </div>
        </div>
        <div className='section2'>
          <div className='subsection'>
            <div className='whats-new'>What's New</div>
            <div className='notif-text'>
              <div className="textBlock">21 Feb 2024</div>
              <div className="textBlock">
                <p className="label">Old vehicles on Delhi roads could face scrapping</p>
              </div>
              <div className="textBlock">
                <p className="label">03/07/2024 - 11:46</p>
              </div>
              <div className='mid-line'>______________________________________________________________</div>
            </div>
            <div className='notif-text'>
              <div className="textBlock">15 Feb 2024</div>
              <div className="textBlock">
                <p className="label">Nashik traffic police get training on new e-challan gadgets.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default License