import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/fetchRandM';

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Rick and Morty</h1>
    </>
  );
}
