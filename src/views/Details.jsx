import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useCharacterContext } from '../context/CharacterContext';

export default function Details() {
  const { character, loading, getCharacterById } = useCharacterContext();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (!loading) getCharacterById(id);
  }, [id, loading]);

  const buttonClick = () => {
    history.push('/');
  };

  return (
    <div>
      <button onClick={buttonClick}>Home</button>
      {loading || !character.id ? (
        <p>loading...</p>
      ) : (
        <>
          <h3>{character.name}</h3>
          <img src={character.image} alt={`Image of ${character.name}`} />
          <p>Species: {character.species}</p>
          <p>Status: {character.status}</p>
        </>
      )}
    </div>
  );
}
