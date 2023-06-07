import React, { useRef } from 'react';
import '../styles/Carousel.css'

const Carousel = ({ images }) => {
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
                {images.map((image, index) => (
                    <div key={index} className="image-wrapper">
                        <img src={image} alt={`Image ${index}`} className="carousel-image" />
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