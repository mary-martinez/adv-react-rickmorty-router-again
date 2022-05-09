import { createContext, useContext, useState } from 'react';

const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  return (<CharacterContext.Provider value={{ characters, setCharacters }}>{children}</CharacterContext.Provider>);
};

const useCharacterContext = () => {
  const context = useContext(CharacterContext);

  if (context === undefined) {
    throw new error('useCharacterContext must be used within a CharacterProvider');
  }

  return context;
};

export { CharacterProvider, useCharacterContext };