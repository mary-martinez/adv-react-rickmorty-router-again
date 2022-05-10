import { createContext, useContext, useEffect, useState } from 'react';
import { fetchCharacterById, fetchCharacters } from '../services/fetchRandM';

const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  const getCharacterById = async (id) => {
    const thisCharacter = characters.find((val) => val.id === Number(id));
    console.log('thisCharacter', thisCharacter);
    if (!thisCharacter) {
      setLoading(true);
      const fetchData = async () => {
        const data = await fetchCharacterById(id);
        setCharacter(data);
      };
      fetchData();
    } else {
      setCharacter(thisCharacter);
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
      setCharacter({});
      setLoading(false);
    };
    fetchData();
  }, []);
  return (<CharacterContext.Provider value={{ characters, character, loading, getCharacterById }}>{children}</CharacterContext.Provider>);
};

const useCharacterContext = () => {
  const context = useContext(CharacterContext);

  if (context === undefined) {
    throw new error('useCharacterContext must be used within a CharacterProvider');
  }

  return context;
};

export { CharacterProvider, useCharacterContext };