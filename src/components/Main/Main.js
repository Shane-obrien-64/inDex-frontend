import { useState } from "react";
import "./Main.css";

const Main = ({ handleSearchSubmit }) => {
  const [pokeId, setPokeId] = useState("");
  //   function getRandomNumber() {
  //     return Math.floor(Math.random() * (30 - 1 + 1)) + 1;
  //   }
  const handleInputChange = (e) => {
    setPokeId(e.target.value);
    console.log(pokeId);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    handleSearchSubmit(pokeId);
  };

  return (
    <main className="main">
      <h1 className="main__heading">Welcome to inDex!</h1>
      <p className="main__text">
        Just type in your favorite Pokemon and hit search!
      </p>
      <form onSubmit={handleSearch}>
        <input
          className="main__search-bar"
          onChange={handleInputChange}
          type="text"
          value={pokeId}
        ></input>
        <button className="main__btn" type="submit">
          go!
        </button>
      </form>
    </main>
  );
};

export default Main;
