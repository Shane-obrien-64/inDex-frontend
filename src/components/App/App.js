import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Entry from "../Entry/Entry";
import getPokemon from "../../utils/api";
import { CurrentPokeContext } from "../../contexts/CurrentPokeContext";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./App.css";

function App() {
  const [poke, setPoke] = useState({});
  const history = useHistory();

  // useEffect(() => {
  //   getPokemon(57)
  //     .then((res) => {
  //       setPoke(res);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  const handleSearchSubmit = (value) => {
    getPokemon(value)
      .then((res) => {
        setPoke(res);
        console.log(res);
      })
      .then((res) => {
        history.go("/entry");
      })
      .catch((err) => console.error(err));
  };

  return (
    <CurrentPokeContext.Provider value={{ poke, setPoke }}>
      <Router>
        <div className="App">
          <Header />
          {/* <Entry />
        <Main /> */}
          <Switch>
            <Route path="/entry">
              <Entry />
            </Route>
            <Route path="/">
              <Main handleSearchSubmit={handleSearchSubmit} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </CurrentPokeContext.Provider>
  );
}

export default App;
