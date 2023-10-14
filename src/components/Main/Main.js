import "./Main.css";

const Main = () => {
  //   function getRandomNumber() {
  //     return Math.floor(Math.random() * (30 - 1 + 1)) + 1;
  //   }

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
