import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import { useCharacterContext } from '../context/CharacterContext';
import { fetchCharacters } from '../services/fetchRandM';

export default function Home() {
  const { characters, setCharacters, setCharacter } = useCharacterContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
      setCharacter({});
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Rick and Morty</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        characters.map((character) => (
          <Link to={`/character/${character.id}`} key={character.id}>
            <h2>{character.name}</h2>
          </Link>
        ))
      )}
    </>
  );
}
