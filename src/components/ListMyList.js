import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import HoverTitle from './HoverTitle';
import '../styles/CategoryList.css';
import axios from 'axios';


const ListMyList = ({ courses }) => {

  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesArray = [];
  
        const response1 = await axios.get('http://localhost:4000/search/WEB');
        coursesArray.push(response1.data[0]);  
        const response2 = await axios.get('http://localhost:4000/search/ARC');
        coursesArray.push(response2.data[0]);  
        const response3 = await axios.get('http://localhost:4000/search/TSI');
        coursesArray.push(response3.data[0]);
        setSelectedCourses(coursesArray);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
      
              <div className='category-title' >
                <HoverTitle
                  text1='Ma Liste'
                  text2='Tout explorer'
                />
              </div>
              <Carousel courses={selectedCourses} />
          </div>		  
        )}
   
export default ListMyList;