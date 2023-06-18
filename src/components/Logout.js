import React from 'react';
import { NavLink } from 'react-router-dom';

function Logout() {


  return (

    <NavLink className="custom-link" to="/" activeClassName="active">Logout</NavLink>
  )
}
export default Logout;