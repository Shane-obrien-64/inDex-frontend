import gitLogo from "../../images/github_logo.svg";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <footer>
        <p>Developed by Shane O'Brien 2023</p>
        <div>
          <img src={gitLogo} />
          <a href="https://github.com/Shane-obrien-64">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
