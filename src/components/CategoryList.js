import React, { useState } from 'react';
import Carousel from './Carousel';
import HoverTitle from './HoverTitle';
import '../styles/CategoryList.css';
import UEPagePopping from './UEPagePopping';

const CategoryList = ({ courses }) => {
  const [selectedUE, setSelectedUE] = useState(null);

  const handleClick = (UE) => {
    console.log('handleClick called with UE:', UE);
    setSelectedUE(UE);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div>
      <ul className='category-list'>
        {courses.map((category, index) => (
		      <div key={index} className="category-item">
            {selectedUE === category[0].UE && (
              <UEPagePopping UE={category[0].UE} reset={setSelectedUE} />
            )}
            <li key={index} className='list-element'>
              <div className='category-title' onClick={() => handleClick(category[0].UE)}>
                <HoverTitle
                  text1={category[0].UE}
                  text2='Tout explorer'
                />
              </div>
              <Carousel courses={category} cas={0} />
			      </li>
          </div>		  
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;