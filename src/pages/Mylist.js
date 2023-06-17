import '../styles/Noodle.css';
import Navbar from '../components/Navbar';
import CategoryList from '../components/CategoryList';
import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListMyList from '../components/ListMyList';

function Mylist() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesArray = [];
        const response1 = await axios.get('http://localhost:4000/courses/WEB[0]');
        coursesArray.push(response1.data);
        const response2 = await axios.get('http://localhost:4000/courses/ARC[0]');
        coursesArray.push(response2.data);
        const response3 = await axios.get('http://localhost:4000/courses/TSI[0]');
        coursesArray.push(response3.data);
        setCourses(coursesArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div >
        <div className='fade-overlay'/>
      </div>
      <span className="overlay">
        <ListMyList courses={courses}/>
        <Footer />
      </span>
    </div>
  );
}

export default Mylist;
