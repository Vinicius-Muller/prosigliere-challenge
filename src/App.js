import './App.css';
import { Header } from "./components/layout/header/Header.js";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { CharacterList } from "./components/src/character-list/CharacterList.js";
import { CharacterDetails } from "./components/src/character-details/CharacterDetails.js";
import { Favorites } from './components/src/favorites/Favorites.js';

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  async function fetchData() {
    await axios.get('https://hp-api.onrender.com/api/characters')
    .then(response => {
      setData(response.data);
    })
  }

  function favoriteChar(char) {
    setFavorites([
      ...favorites, 
      char
    ]);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route 
            path="/" 
            element={
              <CharacterList 
                list={data}
              />
            }
          />

          <Route 
            path="/characterDetails/:id" 
            element={
              <CharacterDetails 
                list={data}
                saveFavorite={favoriteChar}
              />
            }
          />

          <Route 
            path="/favorites" 
            element={
              <Favorites 
                list={favorites}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
