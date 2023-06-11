import '../styles/PagePopping.css';
import React, { useEffect, useState } from 'react';

const PagePopping = ({ course, index }) => {

    const [isWindowOpen, setIsWindowOpen] = useState(true);

    const handleCloseClick = () => {
        setIsWindowOpen(false);
        document.body.style.overflow = 'auto';
    };

    if (!isWindowOpen) {
      return null;
    }

    return (
        <div className='page-container'>
            <div className='page-pop'> 
            <img src={course.image} alt={`img ${index}`} className='image-page'></img>
            <button className='close' onClick={handleCloseClick}>✖</button>
            </div>
        </div>
    );
}


export default PagePopping;
