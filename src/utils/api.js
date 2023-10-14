const handleServerRes = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const getPokemon = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) =>
    handleServerRes(res)
  );
};

export default getPokemon;
