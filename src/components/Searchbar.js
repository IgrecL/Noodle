import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import fleche from '../assets/fleche.png';
// import List from "./Components/List"

function Searchbar() {
  return (
    <nav className="search__main">
      <nav className="search__search">
        <TextField
          id="outlined-secondary"
          variant="filled"
          fullWidth 
          label="Rechercher un cours"
          color="primary"
        />
      </nav>
      <img className='search__fleche' src={fleche} alt="fleche"/>
      {/* <List /> */}
    </nav>
  );
}

export default Searchbar;