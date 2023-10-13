import logo from "../../logo.svg";
import gitLogo from "../../images/github_logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="">
        <img src={logo}></img>
        <nav>
          <a>home</a>
          <a>about</a>
        </nav>
      </header>
      <main>
        <h1>Welcome to inDex!</h1>
        <p>Just type in your favorite Pokemon and hit search!</p>
        <input type="text"></input>
        <button>go!</button>
      </main>
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
