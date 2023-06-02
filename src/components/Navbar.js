import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Noodle.css';
import { Link } from 'react-router-dom';
import '../styles/Link.css'
import '../styles/Bebas.css'

function Navbar(){
return(

    <header className="header">
    <img className='header__logo' src={logo} alt="Noodle Logo"/>
    <nav className='navbar'>
        <Link className="custom-link" to="/">Accueil</Link>
        <Link className="custom-link" to="/Mylist">Ma Liste</Link>
    </nav>
    </header>)
} 
export default Navbar

