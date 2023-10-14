import logo from "../../logo.svg";
import Nav from "../Nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo}></img>
      <Nav />
    </header>
  );
};

export default Header;
