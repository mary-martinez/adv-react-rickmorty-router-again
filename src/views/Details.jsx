import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useCharacterContext } from '../context/CharacterContext';
import { fetchCharacterById } from '../services/fetchRandM';

export default function Details() {
  const { characters, character, setCharacter } = useCharacterContext();
  // const [character, setCharacter] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const thisCharacter = characters.find((val) => val.id === Number(id));
    if (!thisCharacter) {
      const fetchData = async () => {
        const data = await fetchCharacterById(id);
        setCharacter(data);
      };
      fetchData();
    } else {
      setCharacter(thisCharacter);
    }
    setLoading(false);
    // setCharacter(info);
  }, []);

  const buttonClick = () => {
    history.push('/');
  };
  console.log('character', character);

  return (
    <div>
      <button onClick={buttonClick}>Home</button>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <h3>{character.name}</h3>
          <img src={character.image} />
          <p>Species: {character.species}</p>
          <p>Status: {character.status}</p>
        </>
      )}
    </div>
  );
}
