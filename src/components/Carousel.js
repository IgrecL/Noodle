import React, { useRef, useState } from 'react';
import '../styles/Carousel.css';
import PagePopping from './PagePopping';

const Carousel = ({ courses }) => {
  const carouselRef = useRef(null);

    const SCROLL_AMOUNT = 1035; // Adjust the scroll amount as needed 
    
    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            left: -SCROLL_AMOUNT,
            behavior: 'smooth',
        });
    };
    
    const scrollRight = () => {
        carouselRef.current.scrollBy({
            left: SCROLL_AMOUNT, 
            behavior: 'smooth',
        });
    };
    
    return (
        <div className="image-carousel">
            <button className="carousel-button left" onClick={scrollLeft}>
                &lt;
            </button>
            <div className="carousel-container" ref={carouselRef}>
                {courses.map((course, index) => (
                    <div key={index} className="carousel-item">
                        <div key={index} className="image-wrapper">
                            <img src={course.image} alt={`Image ${index}`} className="carousel-image" />
                            <div className="carousel-title">{course.shortTitle}</div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-button right" onClick={scrollRight}>
                &gt;
            </button>
        </div>
    );
};

export default Carousel;
