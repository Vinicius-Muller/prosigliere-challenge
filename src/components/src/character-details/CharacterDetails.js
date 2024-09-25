import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import "./characterDetails.css";

import { Button } from '@mui/material';

export function CharacterDetails({ list, saveFavorite }) {
  const { id } = useParams();
  const navigate = useNavigate();

  function getCharData() {
    return list.find(char => char.id === id);
  }

  function handleFavoriteChar() {
    saveFavorite(getCharData());
    navigate("/favorites");
  }

  return (
    <div className='details-box'>
      <h2>Name: { getCharData().name }</h2>
      <h2>House: { getCharData().house }</h2>
      <h2>Species: { getCharData().species }</h2>
      <h2>Actor: { getCharData().actor }</h2>

      <h4>Alternate Names</h4>
      <div className="alternate-box">
        {
          getCharData().alternate_names.map((alt, idx) => (
            <li key={idx}> {idx + 1} - {alt} </li>
          ))
        }
      </div>
      
      <Button
        variant="contained"
        color="success"
        onClick={handleFavoriteChar}
      >
        Favorite
      </Button>
    </div>
  );
}