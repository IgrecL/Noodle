import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Accueil.css';
import Login from '../components/Login';



function Accueil() {
  return (
    <div className="Accueil">
      <div className="content">
        <img src={logo} alt="Logo" className="logo" />
        <Login />

      </div>
    </div>
  );
}

export default Accueil;