import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Entry from "../Entry/Entry";
import getPokemon from "../../utils/api";
import { CurrentPokeContext } from "../../contexts/CurrentPokeContext";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [poke, setPoke] = useState({});

  useEffect(() => {
    getPokemon(71)
      .then((res) => {
        setPoke(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <CurrentPokeContext.Provider value={{ poke, setPoke }}>
      <div className="App">
        <Header />
        <Entry />
        <Main />
        <Footer />
      </div>
    </CurrentPokeContext.Provider>
  );
}

export default App;
