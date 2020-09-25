import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Palette from "./Palette";
import "./seedColors";
import seedColors from "./seedColors";
import { colorsGenerator } from "./helperFunctions";

function App() {
  console.log(colorsGenerator(seedColors[7]));
  return (
    <div className="App">
      <Palette palette={seedColors[7].colors} />
    </div>
  );
}

export default App;
