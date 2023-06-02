import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Noodle.css';
import { Link , NavLink } from 'react-router-dom';
import '../styles/Link.css'
import Searchbar from "./Searchbar";

function Navbar(){
return(

    <header className="header">
    <img className='header__logo' src={logo} alt="Noodle Logo"/>
    <nav className='navbar'>
    <NavLink className="custom-link" to="/" activeClassName="active">Accueil</NavLink>
    <NavLink className="custom-link " to="/Mylist" activeClassName="active">Ma Liste</NavLink>
    <Searchbar></Searchbar>
    </nav>
    </header>)
} 
export default Navbar

