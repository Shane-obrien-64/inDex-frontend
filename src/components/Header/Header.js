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

  const handleGetPokemon = (value) => {
    getPokemon(value)
      .then((res) => {
        setPoke(res);
      })
      .then(() => {
        navigate(`/entry/${value}`);
      })
      .catch((err) => {
        console.error(err);
        navigate("/error404");
      });
  };

  const handleSearchSubmit = (value) => {
    const id = value.toLowerCase();
    handleGetPokemon(id);
  };

  const handleRandom = () => {
    const random = Math.random();
    const randomNumber = Math.floor(random * 1009) + 1;
    handleGetPokemon(randomNumber);
  };

  const handleMainPage = () => {
    navigate("/");
  };

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
