import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryList from '../components/CategoryList';
import logo from '../assets/logo.png';
import '../styles/Noodle.css';
import '../styles/Navbar.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Trending from '../components/Trending'

function Noodle() {

    const [courses, setCourses] = useState([]);
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

    return (    
        <div>
        <Navbar />
            <div className='background-image'>
                <div className='fade-overlay'/>
            </div>
            <span className="overlay">
                <Trending />
                <CategoryList courses={courses} />
                <Footer />
            </span>
          
        </div>
    );  
};

export default Noodle;