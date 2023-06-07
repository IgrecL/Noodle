import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Input from '@mui/material/Input';
import loupe from '../assets/loupe_blanc.png';
import croix from '../assets/cross.png'
// import List from "./Components/List"

function Searchbar() {
  const [expanded, setExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleSearchBar = () => {
    if (!expanded) {
      setExpanded(true);
    }
  };

  const clearInput = () => {
    setInputValue('');
    setExpanded(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="search__main">
      <div className={`search__search ${expanded ? 'expanded' : ''}`}>
        <input className="search__input" placeholder="Cours, Profs, etc" value={inputValue} onChange={handleInputChange} />
        {inputValue && (
  <img className="search__clear" src={croix} alt="Clear" onClick={clearInput} />
      )}
      </div>
      <img className={`search__loupe ${expanded ? 'expanded' : ''}`} src={loupe} alt="loupe" onClick={toggleSearchBar} />
    </div>
  );
}

export default Searchbar;
