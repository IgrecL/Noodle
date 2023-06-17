import '../styles/PagePopping.css';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import LinksList from './LinksList';

const PagePopping = ({ course, reset, cas2}) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [linksList, setLinksList] = useState({});

  const pageContainerRef = useRef(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/links/${course.shortTitle}`)
      .then((response) => {
        const linksData = response.data;
        setLinksList(linksData);
        setIsWindowOpen(true);
      })
      .catch((error) => {
        console.error(error);
      });
  });


    const handleCloseClick = () => {
        if (cas2 == 0) {
            document.body.style.overflow = 'auto';
        }
        reset(null);
        setIsWindowOpen(false);
    };

    const handleOutsideClick = (event) => {
      if (
        pageContainerRef.current &&
        !pageContainerRef.current.contains(event.target)
      ) {
        handleCloseClick();
      }
    };
  
    
    const imageRef = {
        backgroundImage: `url(${course.image})`,
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
    <>
      {isWindowOpen && (
        <div className={`page-container`}>
          <div ref={pageContainerRef} className={'page-pop'}>
            <div style={imageRef} className='image-page'>
              <div className='fade-image-page' />
              <h1 className='title-pop'>{course.title}</h1>
              {linksList[0] ? (
                <div className='buttons-pop'>
                  <a href={linksList[0].link} target='_blank' rel='noreferrer'>
                    <button className='button1'>▶ Lecture</button>
                  </a>
                  <a
                    href='https://en.wikipedia.org/wiki/React_(software)'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='button2'>+</button>
                  </a>
                </div>
              ) : (
                <div className='buttons-pop'>
                  <button className='button1'>▶ Lecture</button>
                  <button className='button2'>+</button>
                </div>
              )}
            </div>
            <p className='description-pop'>{course.description}</p>
            <div className='linksList-pop'>
              <LinksList links={linksList} />
            </div>
            <button className='close' onClick={handleCloseClick}>
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PagePopping;
