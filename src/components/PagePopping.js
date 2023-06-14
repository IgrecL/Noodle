import '../styles/PagePopping.css';
import React, { useEffect, useState } from 'react';

const PagePopping = ({ course, index, reset }) => {

    const [isWindowOpen, setIsWindowOpen] = useState(true);

    const handleCloseClick = () => {
        setIsWindowOpen(false);
        document.body.style.overflow = 'auto';
        reset(null);
    };

    if (!isWindowOpen) {
      return null;
    }


    return (
        <div className='page-container'>
            <div className='page-pop'> 
            <img src={course.image} alt={`img ${index}`} className='image-page'></img>
            <h1>{course.title}</h1>
			<div className='buttons'>
				<a href='https://docs.google.com/presentation/d/1YUjNjfnHAnkmmquXGP7QWRpZiAj8vzNtkU2Ud4TGg-w/edit#slide=id.p' target="_blank" rel="noreferrer">
					<button className='button1'>▶ Lecture</button>
				</a>
				<a href='https://en.wikipedia.org/wiki/React_(software)' target="_blank" rel="noreferrer">
					<button className='button2'>+</button>
				</a>
			</div>
            <p>{course.description}</p>
            <button className='close' onClick={handleCloseClick}>✖</button>
            </div>
        </div>
    );
}


export default PagePopping;
