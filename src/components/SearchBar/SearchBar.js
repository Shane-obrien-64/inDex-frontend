import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearchSubmit }) => {
  const [pokeId, setPokeId] = useState("");

  const handleInputChange = (e) => {
    setPokeId(e.target.value);
    console.log(pokeId);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    handleSearchSubmit(pokeId);
  };
  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        className="search-bar__input"
        onChange={handleInputChange}
        type="text"
        value={pokeId}
      ></input>
      <button className="search-bar__btn" type="submit">
        GO!
      </button>
    </form>
  );
};

export default SearchBar;
