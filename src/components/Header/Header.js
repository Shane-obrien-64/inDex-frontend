import logo from "../../logo.svg";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import getPokemon from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CurrentPokeContext } from "../../contexts/CurrentPokeContext";
import "./Header.css";

const Header = () => {
  const { poke, setPoke } = useContext(CurrentPokeContext);
  const navigate = useNavigate();
  console.log(poke);

  const handleGetPokemon = (value) => {
    getPokemon(value)
      .then((res) => {
        setPoke(res);
      })
      .then(() => {
        console.log(poke);
        navigate("/entry");
      })
      .catch((err) => console.error(err));
  };

  const handleSearchSubmit = (value) => {
    handleGetPokemon(value);
  };

  const handleRandom = () => {
    const random = Math.random();
    const randomNumber = Math.floor(random * 1009) + 1;
    console.log(randomNumber);
    handleGetPokemon(randomNumber);
  };

  const handleMainPage = () => {
    navigate("/");
  };

  // handleRandom();

  return (
    <header className="header">
      <img className="header__logo" src={logo}></img>
      <div className="header__divider">
        <Nav handleRandom={handleRandom} handleMainPage={handleMainPage} />
        <SearchBar handleSearchSubmit={handleSearchSubmit} />
      </div>
    </header>
  );
};

export default Header;
