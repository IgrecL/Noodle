import '../styles/UEPagePopping.css';
import Carousel from './Carousel';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const UEPagePopping = ({ UE, reset }) => {
  const [courses, setCourses] = useState([]);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
  const [isWindowOpen, setIsWindowOpen] = useState(true);
  const [isCourseOpen, setIsCourseOpen] = useState(true);

  const ues = [
    'Architecture TCP-IP',
    'Systèmes de Communication 1',
    'Algorithmique et programmation',
    'Pratique et Projets 1',
    'Pratique et Projets 2',
    'Systèmes et Services Informatiques',
    'Architectures LAN et WAN',
    'Systèmes de Communication 2',
    'Pratique et Projets 3',
    'Projet de recherche et d’ingénierie',
    'Humanités'
  ];

  const pageContainerRef = useRef(null);

  useEffect(() => {
    const fetchObjets = async () => {
      try {
        const coursesArray = [];

        for (const ue of ues) {
          const response = await axios.get(`http://localhost:4000/courses/${ue}`);
          coursesArray.push(response.data);
        }

        setCourses(coursesArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchObjets();
  }, [ues]);

  const handleCloseClick = () => {
    setIsWindowOpen(false);
    document.body.style.overflow = 'auto';
    reset(null);
    setIsCourseOpen(false);
  };

  const handleCourseClick = (index) => {
    setSelectedCourseIndex(index);
    setIsWindowOpen(true);
    document.body.style.overflow = 'hidden';
    setIsCourseOpen(true);
    console.log('a77');
  };

  const handleOutsideClick = (event) => {
    if (
      pageContainerRef.current &&
      !pageContainerRef.current.contains(event.target)
    ) {
      handleCloseClick();
    }
  };

  useEffect(() => {
    if (isWindowOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isWindowOpen]);

  return (
    <div className='UEpage-container'>
      {isWindowOpen && (
        <div ref={pageContainerRef} className='UEpage'>
          <h2 className='UEcategory-title'>{UE}</h2>
          <button className="close-button" onClick={handleCloseClick}>
            ✖
          </button>
          {courses.map((category, index) => {
            if (category[0].UE === UE) {
              return (
                <li key={index} className='list-element'>
                  <Carousel courses={category} onCourseClick={handleCourseClick} setChosenCourse={selectedCourseIndex} cas={1} context='ue'/>
                </li>
              );
            } else {
              return null;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default UEPagePopping
