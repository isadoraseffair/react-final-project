import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1 className="heading">React Weather App</h1>
      <Weather />
      <footer>
        <a
          href="https://github.com/isadoraseffair/react-final-project"
          target="blank"
        >
          Open-source code {" "}
        </a>
        by Isadora Seffair
      </footer>
    </div></div>
  );
}
