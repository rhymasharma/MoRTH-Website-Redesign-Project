import * as React from "react";
import Heading from './logo.png';
import '../styles/Logos.css';

function Logos() {
  return (
    <div className="main">
      <img src={Heading} alt='heading' />
    </div>
  );
}

export default Logos