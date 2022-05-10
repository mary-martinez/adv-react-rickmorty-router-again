import { Link } from 'react-router-dom';
import { useCharacterContext } from '../context/CharacterContext';

export default function Home() {
  const { characters, loading } = useCharacterContext();

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
