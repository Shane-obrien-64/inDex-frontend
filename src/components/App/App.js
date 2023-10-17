import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Entry from "../Entry/Entry";
import getPokemon from "../../utils/api";
import { CurrentPokeContext } from "../../contexts/CurrentPokeContext";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useNavigate,
} from "react-router-dom";
import "./App.css";

function App() {
  const [poke, setPoke] = useState({});

  const handleSearch = (value) => {
    setPoke(value);
  };

  // console.log(navigate);

  // const handleSearchSubmit = (value) => {
  //   getPokemon(value)
  //     .then((res) => {
  //       setPoke(res);
  //     })
  //     .then(() => {
  //       console.log(poke);
  //       // navigate.push("/entry");
  //     })
  //     .catch((err) => console.error(err));
  // };

  // useEffect(() => {
  //   getPokemon(395)
  //     .then((res) => {
  //       setPoke(res);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <CurrentPokeContext.Provider value={{ poke, setPoke }}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/entry" element={<Entry />} />
            <Route path="/" element={<Main />} />
          </Routes>
          <Footer />
        </div>
        {/* <TheAwesomeComponentBetweenAppAndMain /> */}
      </Router>
    </CurrentPokeContext.Provider>
  );
}

export default App;

// const TheAwesomeComponentBetweenAppAndMain = () => {
//   // you have an access to the useNavigation

//   // const handleSearchSubmit = (value) => {
//   //   getPokemon(value)
//   //     .then((res) => {
//   //       setPoke(res);
//   //     })
//   //     .then(() => {
//   //       console.log(poke);
//   //       // history.push("/entry");
//   //     })
//   //     .catch((err) => console.error(err));
//   // };

//   return (
//     <div className="App">
//       <Header handleSearchSubmit={handleSearchSubmit} />
//       {/* <Entry />
//           <Main /> */}
//       <Routes>
//         <Route path="/entry" element={<Entry />} />
//         <Route path="/" element={<Main />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };
