import '../styles/PagePopping.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinksList from './LinksList';

const PagePopping = ({ course, reset }) => {

    const [isWindowOpen, setIsWindowOpen] = useState(true);
    const [linksList, setLinksList] = useState({});

	useEffect(() => {
		axios.get(`http://localhost:4000/links/${course.shortTitle}`)
		.then((response) => {
			const linksData = response.data;
			setLinksList(linksData);
		})
		.catch((error) => {
			console.error(error);
		});
	}, []);

    const handleCloseClick = () => {
        setIsWindowOpen(false);
        document.body.style.overflow = 'auto';
        reset(null);
    };

    if (!isWindowOpen) {
      return null;
    }
    
    const imageRef = {
        backgroundImage: `url(${course.image})`,
    };

    console.log("linkslist "+linksList)

    return (
        <div className='page-container'>
            <div className='page-pop'> 
            <div style={imageRef} className='image-page'>
                <div className='fade-image-page'/>
                <h1 className='title-pop'>{course.title}</h1>
                <div className='buttons-pop'>
				    <a href='https://docs.google.com/presentation/d/1YUjNjfnHAnkmmquXGP7QWRpZiAj8vzNtkU2Ud4TGg-w/edit#slide=id.p' target="_blank" rel="noreferrer">
					    <button className='button1'>▶ Lecture</button>
				    </a>
				    <a href='https://en.wikipedia.org/wiki/React_(software)' target="_blank" rel="noreferrer">
					    <button className='button2'>+</button>
				    </a>
			    </div>
            </div>
            <p className='description-pop'>{course.description}</p>
            <div className='linksList-pop'>
                <LinksList links={linksList} />
            </div>
            <button className='close' onClick={handleCloseClick}>✖</button>
            </div>
        </div>
    );
}


export default PagePopping;
