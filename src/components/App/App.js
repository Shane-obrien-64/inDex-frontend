import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Entry from "../Entry/Entry";
import NotFound from "../NotFound/NotFound";

import { CurrentPokeContext } from "../../contexts/CurrentPokeContext";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [poke, setPoke] = useState({});

  return (
    <CurrentPokeContext.Provider value={{ poke, setPoke }}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/entry/:id" element={<Entry />} />
            <Route path="/" element={<Main />} />
            <Route path="/error404" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CurrentPokeContext.Provider>
  );
}

export default App;
