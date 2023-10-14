import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import getPokemon from "../../utils/api";
import "./App.css";

function App() {
  getPokemon(395).then((res) => console.log(res));
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
