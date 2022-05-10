export async function fetchCharacters() {
  const resp = await fetch('https://rickandmortyapi.com/api/character');
  const data = await resp.json(resp);
  return data.results;
}

export async function fetchCharacterById(id) {
  const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await resp.json(resp);
  return data;
}