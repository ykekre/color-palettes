import React, { Component } from "react";
import ColorBox from "./ColorBox";
import './Palette.css'
class Palette extends Component {
  render() {
    return (
      <div className="Palette">
        <div className="Palette-Colors">
          {this.props.palette.map((color) => {
            return <ColorBox color={color.color} name={color.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default Palette;
