import React from "react";
import "./App.css";
import Palette from "./Palette";
import "./seedColors";
import seedColors from "./seedColors";
import { colorsGenerator } from "./helperFunctions";

function App() {
  return (
    <div className="App">
      <Palette palette={colorsGenerator(seedColors[7]).colors} />
    </div>
  );
}

export default App;
