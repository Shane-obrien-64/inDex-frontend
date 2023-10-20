import "./Nav.css";

const Nav = ({ handleRandom, handleMainPage }) => {
  return (
    <nav className="nav">
      <button onClick={handleMainPage} className="nav__link" type="button">
        Home
      </button>
      <button onClick={handleRandom} className="nav__link" type="button">
        Random
      </button>
    </nav>
  );
};

export default Nav;
