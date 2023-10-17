import "./Nav.css";

const Nav = ({ handleRandom, handleMainPage }) => {
  return (
    <nav onClick={handleMainPage} className="nav">
      <button className="nav__link" type="button">
        Home
      </button>
      <button onClick={handleRandom} className="nav__link" type="button">
        Random
      </button>
    </nav>
  );
};

export default Nav;
