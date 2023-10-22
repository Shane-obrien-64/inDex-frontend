import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Entry from "../Entry/Entry";
import NotFound from "../NotFound/NotFound";
import getPokemon from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { IsLoadingContext } from "../../contexts/IsLoadingContext";
import { CurrentPokeContext } from "../../contexts/CurrentPokeContext";
import { useState } from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  const [poke, setPoke] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleGetPokemon = (value) => {
    setLoading(true);
    navigate(`/entry/${value}`);
    getPokemon(value)
      .then((res) => {
        setPoke(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        navigate("/error404");
      });
  };

  const handleMainPage = () => {
    navigate("/");
  };

  return (
    <IsLoadingContext.Provider value={{ loading, setLoading }}>
      <CurrentPokeContext.Provider value={{ poke, setPoke }}>
        <div className="App">
          <Header
            handleGetPokemon={handleGetPokemon}
            handleMainPage={handleMainPage}
          />
          <Routes>
            <Route path="*" element={<Main />} />
            <Route
              path="/entry/:id"
              element={<Entry handleGetPokemon={handleGetPokemon} />}
            />
            <Route path="/error404" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </CurrentPokeContext.Provider>
    </IsLoadingContext.Provider>
  );
}

export default App;
