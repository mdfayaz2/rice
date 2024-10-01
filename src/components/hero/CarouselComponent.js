// CarouselComponent.jsx

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css'; // Import your custom CSS

const CarouselComponent = () => {
  return (
    <div className="carousel-container" id='slide'>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={1700}
        transitionTime={500}
        emulateTouch={true}
      >
        <div>
          <img src="/images/rice.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/grains.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/images/sack.jpg" alt="Slide 3" />
        </div><div>
          <img src="/images/crop.jpg" alt="Slide 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
