import pp from '../assets/pp.png'
import '../styles/Profilepicture.css'

import React, { useState } from 'react';

function ProfilePicture() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleMouseEnter() {
    setIsDropdownOpen(true);
  };

  function handleMouseLeave(){
    setIsDropdownOpen(false);
  };

  return (
        <div className='pp-wrapper' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img className='pp' src={pp} alt='profile picture' />
          <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
            <span>Gérer le profil</span>
          </div>
          <div className='arrow'></div>
        </div>
      );
      
}

export default ProfilePicture;
