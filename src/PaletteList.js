import React, { Component } from "react";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const palettes = this.props.palettes;
    return (
      <div className="PaletteList">
        <h1>List of palettes</h1>

        {palettes.map((p) => {
          return (
            <p>
              <Link to={`/palettes/` + p.id}>{p.paletteName}</Link>{" "}
            </p>
          );
        })}
      </div>
    );
  }
}

export default PaletteList;
