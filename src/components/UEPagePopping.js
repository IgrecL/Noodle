import '../styles/UEPagePopping.css';
import Carousel from './Carousel';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UEPagePopping = ({ UE }) => {
  const [courses, setCourses] = useState([]);
  const [isWindowOpen, setIsWindowOpen] = useState(true);
  const ues = [
    'Systèmes et Services Informatiques',
    'Architectures LAN et WAN'
  ];

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
  };

  if (!isWindowOpen) {
    return null;
  }

  return (
    <div className='page-container'>
      <div className='page'>
        <h2 className='category-title'>{UE}</h2>
        <button className='close' onClick={handleCloseClick}>✖</button>
        {courses.map((category, index) => {
          if (category[0].UE === UE) {
            return (
              <li key={index} className="list-element">
                <Carousel courses={category} />
              </li>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default UEPagePopping;
