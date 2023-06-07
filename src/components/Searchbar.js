import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Input from '@mui/material/Input';
import loupe from '../assets/loupe_blanc.png';
// import List from "./Components/List"

function Searchbar() {
  return (
    <div className="search__main">
      <div className="search__search">
        <img className="search__loupe" src={loupe} alt="loupe"/>
        <input className="search__input" placeholder="Cours, Profs, etc" />
      </div>
      {/* <List /> */}
    </div>
  );
}

export default Searchbar;