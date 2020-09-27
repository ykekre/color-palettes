import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import PaletteList from "./PaletteList";
import Palette from "./Palette";
import SinglePalette from "./SinglePalette";
import seedColors from "./seedColors";
import { colorsGenerator } from "./helperFunctions";

function App() {
  function findPalette(info) {
    //* get the id from the url path
    const paletteId = info.match.params.paletteId;
    const colorId = info.match.params.colorId;

    //*find palette matching that id in seedColors
    const palette = seedColors.find((palette) => paletteId === palette.id);

    //* generate the scales for this palette and return new palette
    return colorsGenerator(palette, colorId);
  }
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/palettes/:paletteId"
          render={(routeProps) => (
            //* the routeProps object's match obect stores the //* ':id' param value
            <Palette palette={findPalette({ ...routeProps })} />
          )}
        />
        <Route
          exact
          path="/palettes/:paletteId/:colorId"
          render={(routeProps) => (
            <SinglePalette palette={findPalette({ ...routeProps })} />
          )}
        />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
