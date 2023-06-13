import React, { useState, useEffect } from "react";
import '../styles/Trending.css'
import axios from 'axios';

const Trending = () => {
	const [course, setCourse] = useState({});

	useEffect(() => {
		axios.get('http://localhost:4000/search/WEB')
		.then((response) => {
			const courseData = response.data;
			setCourse(courseData[0]);
		})
		.catch((error) => {
			console.error(error);
		});
	}, []);
	
	return (
		<div className='trending-wrapper'>
			<div className='title-name'>{course.title}</div>	
			<div className='description'>{course.description}</div>
			<div className='buttons'>
				<a href='https://docs.google.com/presentation/d/1YUjNjfnHAnkmmquXGP7QWRpZiAj8vzNtkU2Ud4TGg-w/edit#slide=id.p' target="_blank" rel="noreferrer">
					<button className='button1'>▶ Lecture</button>
				</a>
				<a href='https://en.wikipedia.org/wiki/React_(software)' target="_blank" rel="noreferrer">
					<button className='button2'>? Plus d'infos</button>
				</a>
			</div>
		</div>
	);
};
	
export default Trending;