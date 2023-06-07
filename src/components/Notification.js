import '../styles/Notification.css'
import React, { useState } from 'react';
import notif from '../assets/notification.png'

function Notification() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    function handleMouseEnter() {
      setIsDropdownOpen(true);
    };
  
    function handleMouseLeave(){
      setIsDropdownOpen(false);
    };
  
    return (
         <div className='notif-wrapper' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className='notification' src={notif} alt='notif logo' />
            <div className={`dropdown-notif ${isDropdownOpen ? 'open' : ''}`}>
              <span>Il y a un onglet de notif sur Netflix, donc...</span>
            </div>
          </div>
        );
        
  }
  
  export default Notification;
  