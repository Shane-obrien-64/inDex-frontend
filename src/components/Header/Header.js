import logo from "../../logo.svg";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ handleGetPokemon, handleMainPage }) => {
  const handleSearchSubmit = (value) => {
    const id = value.toLowerCase();
    handleGetPokemon(id);
  };

  const handleRandom = () => {
    const random = Math.random();
    const randomNumber = Math.floor(random * 1009) + 1;
    handleGetPokemon(randomNumber);
  };

  return (
    <header className="header">
      <img className="header__logo" src={logo} onClick={handleMainPage}></img>
      <div className="header__divider">
        <Nav handleRandom={handleRandom} handleMainPage={handleMainPage} />
        <SearchBar handleSearchSubmit={handleSearchSubmit} />
      </div>
    </header>
  );
};

export default Header;
