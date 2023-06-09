import React from "react";
import '../styles/Trending.css'

const Trending = (course) => {
	return (
		<div className='trending-wrapper'>
			<div className='title-name'>Projet WEB</div>	
			<div className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
			<div className='buttons'>
				<a href='https://docs.google.com/presentation/d/1YUjNjfnHAnkmmquXGP7QWRpZiAj8vzNtkU2Ud4TGg-w/edit#slide=id.p' target="_blank" rel="noreferrer">
				<button className='button1'>▶ Lecture</button>
				</a>
				<button className='button2'>? Plus d'infos</button>
			</div>
		</div>
	);
};
	
export default Trending;