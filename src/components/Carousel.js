import React, { useRef, useState, useEffect } from 'react';
import '../styles/Carousel.css';
import '../styles/title-buttons.css';
import PagePopping from './PagePopping';

const Carousel = ({ courses }) => {
  const carouselRef = useRef(null);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
  const [isOverflow, setIsOverflow] = useState(false);

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

  const handleClick = (index) => {
    setSelectedCourseIndex(index);
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    const handleResize = () => {
      const carouselContainer = carouselRef.current;
      setIsOverflow(carouselContainer.scrollWidth > carouselContainer.offsetWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const carouselContainer = carouselRef.current;
    const handleOverflow = () => {
      const isOverflowing = carouselContainer.scrollWidth > window.innerWidth;
      setIsOverflow(isOverflowing);
    };

    handleOverflow();
    window.addEventListener('resize', handleOverflow);
    return () => {
      window.removeEventListener('resize', handleOverflow);
    };
  }, []);

  return (
    <div className="image-carousel">
      <button className="carousel-button-left" onClick={scrollLeft}>
        &lt;
      </button>
      <div
        className={`carousel-container${isOverflow ? ' overflow-scroll' : ''}`}
        ref={carouselRef}
      >
        {courses.map((course, index) => (
          <div key={index} className="carousel-item">
            {selectedCourseIndex === index && (
              <PagePopping course={course} index={index} reset={setSelectedCourseIndex} />
            )}
            <button key={index} className="image-wrapper">
              <img src={course.image} alt={`Image ${index}`} className="carousel-image" />
              <div className="carousel-title">
                {course.shortTitle}
                <button className="list-button">+</button>
                <div className="list-rectangle">Ajouter à ma liste</div>
                <button className="arrow-button" onClick={() => handleClick(index)}>
                  ˅
                </button>
                <div className="list-know">En savoir plus</div>
              </div>
            </button>
          </div>
        ))}
      </div>
      <button className="carousel-button-right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
