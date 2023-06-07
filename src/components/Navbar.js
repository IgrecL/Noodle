import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Noodle.css';
import { Link , NavLink } from 'react-router-dom';
import '../styles/Link.css'
import '../styles/Searchbar.css'
import Searchbar from "./Searchbar";
import { useEffect, useState } from 'react';
import Profilepicture from './Profilepicture';


function Navbar(){
      const [isNavbarTransparent, setNavbarTransparent] = useState(true);
    
      useEffect(() => {
        // Fonction de gestion du défilement
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          const scrollThreshold = windowHeight * 0.15; 
          // Modifier la valeur 1000 selon la position où vous voulez que le changement de style se produise
          if (scrollPosition > scrollThreshold) {
            setNavbarTransparent(false);
          } else {
            setNavbarTransparent(true);
          }
        };
    
        // Ajouter un écouteur d'événement de défilement lors du montage du composant
        window.addEventListener('scroll', handleScroll);
    
        // Nettoyer l'écouteur d'événement lors du démontage du composant
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
return(

    <header className={`header ${isNavbarTransparent ? 'transparent' : ''}`}>
    <img className='navbar__logo' src={logo} alt="Noodle Logo"/>
    <nav className='navbar'>
    <NavLink className="custom-link" to="/" activeClassName="active">Accueil</NavLink>
    <NavLink className="custom-link " to="/Mylist" activeClassName="active">Ma liste</NavLink>
    <Searchbar/>
    <Profilepicture/>
    </nav>
    </header>)
} 
export default Navbar

