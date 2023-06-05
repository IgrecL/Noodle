import React, { useState } from 'react';
import '../styles/HoverTitle.css';

const HoverTitle = ({text1, text2}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <span className="hovered-element">
            {text1}
        </span>
        <div className={`displayed-element ${isHovered ? 'visible' : ''}`}>{text2} &gt;</div>    </div>
  );
};

export default HoverTitle;