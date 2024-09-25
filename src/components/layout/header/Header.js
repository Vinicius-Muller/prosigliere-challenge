import { Link } from 'react-router-dom';

import { Autocomplete, TextField } from "@mui/material"
import "./header.css";
import { useState } from 'react';

export function Header() {
  const [house, setHouse] = useState("");

  const houses = [
    "Gryffindor", 
    "Slytherin", 
    "Hufflepuff", 
    "Ravenclaw"
  ]

  return (
    <header>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>

      <Autocomplete
        disablePortal
        options={houses}
        sx={{ width: 300 }}
        renderInput={
          (params) => 
            <TextField
              {...params} 
              label="Preferred House" 
            />
        }
        value={house}
        onChange={(_, newValue) => setHouse(newValue)}
      />
    </header>
  )
}