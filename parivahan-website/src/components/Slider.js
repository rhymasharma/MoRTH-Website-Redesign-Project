import React from 'react';
import "../styles/Slider.css"
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from './image1.jpg';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';


const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          className='carousel' 
          src={image1}
          alt='1st slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className='carousel' 
          src={image2}
          alt='2nd slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className='carousel' 
          src={image3}
          alt='3rd slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className='carousel' 
          src={image4}
          alt='4th slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className='carousel' 
          src={image5}
          alt='5th slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className='carousel' 
          src={image6}
          alt='6th slide'
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider