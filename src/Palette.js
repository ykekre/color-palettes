import React, { Component } from "react";
import Slider from "react-input-slider";
import ColorBox from "./ColorBox";
import "./Palette.css";
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
  }
  render() {
    return (
      <div className="Palette">
        <Slider
          axis="x"
          xstep={100}
          xmin={100}
          xmax={900}
          x={this.state.level}
          onChange={({ x }) => {
            this.setState({ level: parseFloat(x.toFixed(2)) });
          }}
          styles={{
            track: {
              backgroundColor: "#e6e3e8",
            },
            active: {
              backgroundColor: "transparent",
            },
            thumb: {
              backgroundColor: "#ffcc68",
            },
          }}
        />
        <div className="Palette-Colors">
          {this.props.palette[this.state.level].map((color) => {
            return <ColorBox color={color.hex} name={color.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default Palette;
