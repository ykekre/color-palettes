import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Palette from "./Palette";
import "./seedColors";
import seedColors from "./seedColors";
function App() {
  return (
    <div className="App">
      <Palette palette={seedColors[7].colors} />
    </div>
  );
}

export default App;
