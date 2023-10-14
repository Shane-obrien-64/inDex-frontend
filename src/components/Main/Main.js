import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <h1 className="main__heading">Welcome to inDex!</h1>
      <p className="main__text">
        Just type in your favorite Pokemon and hit search!
      </p>
      <form>
        <input className="main__search-bar" type="text"></input>
        <button className="main__btn" type="submit">
          go!
        </button>
      </form>
    </main>
  );
};

export default Main;
