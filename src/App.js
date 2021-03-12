import React from "react";
import "./App.css";
import Forecast from "./components/forecast/Forecast";
import Logo from "./components/logo/Logo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>Page created by Webber</footer>
    </div>
  );
}

export default App;
