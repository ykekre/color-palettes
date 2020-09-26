import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import PaletteList from "./PaletteList";
import Palette from "./Palette";
import "./seedColors";
import seedColors from "./seedColors";
import { colorsGenerator } from "./helperFunctions";

function App() {
  function findPalette(info) {
    //* get the id from the url path
    const id = info.match.params.id;

    //*find palette matching that id in seedColors
    const palette = seedColors.find((palette) => id === palette.id);

    //* generate the scales for this palette and return new palette
    return colorsGenerator(palette);
  }
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/palettes/:id"
          render={(routeProps) => (
            //* the routeProps object's match obect stores the //* ':id' param value
            <Palette palette={findPalette({ ...routeProps })} />
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
