import React, { useState } from 'react';
import Carousel from './Carousel';
import HoverTitle from './HoverTitle';
import '../styles/CategoryList.css';


const CategoryList = ({courses}) => {
	return (
		<div>
			<ul className="category-list">
				{courses.map((category, index) => (
					<li key={index} className="list-element">
						<div className="category-title">
							<HoverTitle text1={category[0].UE} text2="Tout explorer" />
						</div>
						<Carousel courses={category} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default CategoryList;
