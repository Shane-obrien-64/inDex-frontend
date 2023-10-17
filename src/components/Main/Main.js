import SearchBar from "../SearchBar/SearchBar";
import "./Main.css";

const Main = ({ handleSearchSubmit }) => {
  return (
    <main className="main">
      <h1 className="main__heading">Welcome to inDex!</h1>
      <p className="main__text">
        Just type in your favorite Pokemon into the search bar and hit GO!
      </p>
      {/* <SearchBar handleSearchSubmit={handleSearchSubmit} /> */}
    </main>
  );
};

export default Main;
