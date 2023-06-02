import { React, useState } from "react";
import TextField from "@mui/material/TextField"; // npm install @mui/material
// import List from "./Components/List"

function Searchbar() {
  return (
    <div className="search__main">
      <div className="search__search">
        <TextField
          id="outlined-secondary"
          variant="filled"
          fullWidth 
          label="Rechercher un cours"
          color="primary"
        />
      </div>
      {/* <List /> */}
    </div>
  );
}

export default Searchbar;