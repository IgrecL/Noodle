import React, { useRef, useState, useEffect } from 'react';
import '../styles/Carousel.css';
import '../styles/title-buttons.css';
import PagePopping from './PagePopping';
import axios from 'axios';

const Carousel = ({ courses }) => {
    const carouselRef = useRef(null);
    const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
    const [isOverflow, setIsOverflow] = useState(false);
    const [categoryLinks, setCategoryLinks] = useState([]);
    
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
    
    useEffect(() => {
        const fetchObjets = async () => {
            try {
                const linksArray = [];

                for (const course of courses) {
                    const response = await axios.get(`http://localhost:4000/links/${course.shortTitle}`);
                    linksArray.push(response.data);
                }

                setCategoryLinks(linksArray);
            } catch (error) {
                /* console.error(error); */
            }
        };

        fetchObjets();
    }, [courses]);

    return (
        <div className="image-carousel">
            <button className="carousel-button-left" onClick={scrollLeft}>
            &lt;
            </button>
            <div className={`carousel-container${isOverflow ? ' overflow-scroll' : ''}`} ref={carouselRef} >
            {courses.map((course, index) => (
                <div key={index} className="carousel-item">
                {selectedCourseIndex === index && (
                    <PagePopping course={course} reset={setSelectedCourseIndex} />
                    )}
                    <button key={index} className="image-wrapper">

                        {categoryLinks[index] ? ( // Bloc qui permet de récupérer le lien principal du cours
                            <>
                                {categoryLinks[index][0] ? ( // On ajoute le lien principal si on en trouve un
                                    <>
                                        {categoryLinks[index]
                                            .filter(linkItem => linkItem.main) // Filtrer l'item où item.main = true
                                            .map((linkItem, itemIndex) => (
                                                <a href={linkItem.link}>
                                                    <img src={course.image} alt={`Image ${index}`} className="carousel-image" />
                                                </a>
                                            ))}
                                    </>
                                ) : ( // S'il n'y a pas de lien principal on réaffiche juste l'image par défaut
                                    <img src={course.image} alt={`Image ${index}`} className="carousel-image" />
                                )}
                            </>
                        ) : ( // Permet d'afficher l'image dès qu'elle est reçue
                            <>
                                <img src={course.image} alt={`Image ${index}`} className="carousel-image" />
                            </>
                        )}
                        
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
            