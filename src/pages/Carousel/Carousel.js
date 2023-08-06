import React, { useState } from 'react';
import './Carousel.css'; // Create a CSS file for styling

const slidesData = [
  {
    imageUrl: "jeans.png",
    cardContent: "Card 1 Content",
  },
  {
    imageUrl: "jeans.png",
    cardContent: "Card 2 Content",
  },
  {
    imageUrl: "jeans.png",
    cardContent: "Card 3 Content",
  },
  // Add more slide data with image URLs and card content as needed
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesData.length) % slidesData.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slidesData.map((slide, index) => (
          <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
            <img src={slide.imageUrl} alt={`Slide ${index + 1} Image`} />
            <div className="card-content">{slide.cardContent}</div>
          </div>
        ))}
      </div>
      <div className="carousel-navigation">
        <button className="prev-button" onClick={handlePrevClick}>Previous</button>
        <button className="next-button" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
