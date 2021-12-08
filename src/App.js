import './App.css';
import Dictionary from "./Dictionary"
import Github from "./images/github.png";
import Linkedin from "./images/linkedin.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Dictionary Project</h1>
          <h3>What word do you want to look up?</h3>
      </header>
      <main>
<Dictionary />
      </main>
      <footer>
      <div className="col text-center social-logos-container">
      <h5>
        Open source code by Rita Silva <span>👩🏻‍💻</span>
      </h5>
      <a href="https://github.com/RitaSilva28/my-weather-app.git">
        <img className="social-logo" src={Github} alt="github" />
      </a>

      <a href="https://www.linkedin.com/in/rita-silva-44584453/">
        <img className="social-logo" src={Linkedin} alt="linkedin" />
      </a>
    </div>      </footer>
    </div>
  );
}

export default App;