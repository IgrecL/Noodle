import React, { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import Input from '@mui/material/Input';
import magnifyingGlass from '../assets/loupe_blanc.png';
import cross from '../assets/cross.png'
import axios from 'axios';
import PagePopping from "./PagePopping";

function Searchbar() {
  const [expanded, setExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputValueRef = useRef('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleSearchBar = () => {
    if (!expanded) {
      setExpanded(true);
      document.body.style.overflow = 'hidden';
    } else {
      clearInput();
    }
  };

  const clearInput = () => {
    setInputValue('');
    setExpanded(false);
    setSelectedCourse(null);
  };

  const handleInputChange = (e) => {
    inputValueRef.current = e.target.value;
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        const inputValue = inputValueRef.current;
        axios.get(`http://localhost:4000/search/${inputValue}`)
          .then((response) => {
            // Handle the response data
            const course = response.data; // Assuming the response contains the course data
            setSelectedCourse(course[0]);
          })
          .catch((error) => {
            // Handle the error
            console.error(error);
            setSelectedCourse(null);
          });
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="search__main">
      <div className={`search__search ${expanded ? 'expanded' : ''}`}>
        <input
          className="search__input"
          placeholder="Nom du cours"
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue && (
          <img className="search__clear" src={cross} alt="Clear" onClick={clearInput} />
        )}
      </div>
      <img className={`search__loupe ${expanded ? 'expanded' : ''}`} src={magnifyingGlass} alt="loupe" onClick={toggleSearchBar} />
      {selectedCourse && (
        <PagePopping course={selectedCourse} reset={clearInput} cas2={0}/>
      )}
    </div>
  );
}

export default Searchbar;
