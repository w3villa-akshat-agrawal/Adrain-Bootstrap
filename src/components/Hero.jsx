import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HeroCard from './HeroCard';

const Hero = () => {
  return (
    <div className='pb-4 '>
        <Carousel >
      <Carousel.Item>
        <HeroCard/>
      </Carousel.Item>

      <Carousel.Item>
        <HeroCard/>
        
      </Carousel.Item>

      <Carousel.Item>
         <HeroCard/>
      
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Hero;
