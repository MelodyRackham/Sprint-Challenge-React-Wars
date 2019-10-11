import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SWCharacter from './SWCharacter.js';

const CharacterList = () => {
  const [Characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`).then(response => {
      console.log(response.data.results);
      setCharacters(response.data.results);
    }, []);
  });
  return (
    <div>
      {Characters.map(character => {
        return (
          <SWCharacter key={character.id} name={character.name} DOB={character.birth_year} gender={character.gender} />
        );
      })}
    </div>
  );
};

export default CharacterList;
