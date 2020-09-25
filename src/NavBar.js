import React, { Component } from "react";
import Slider from "react-input-slider";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./NavBar.css";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //* communicate back to Palette comp state, what new color format is
    this.props.changeColorFormat(e.target.value);
  }
  render() {
    const { level } = this.props;
    return (
      <div className="NavBar">
        <h3 className="NavBar-logo">Palette-Picker</h3>
        <span>Level: {level}</span>
        <Slider
          axis="x"
          xstep={100}
          xmin={100}
          xmax={900}
          x={level}
          //* communicate back to Palette comp state, what new level is
          onChange={this.props.changeLevel}
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
        <div className="NavBar-select-dropdown">
          <InputLabel id="-select-label" className="NavBar-select-label">
            Copy Format
          </InputLabel>
          <Select
            value={this.props.type}
            className="NavBar-select-menu"
            //* onchange --> handleChange ---> changeColorFormat(defined in palette, the parent comp.)
            onChange={this.handleChange}
          >
            <MenuItem value={"hex"}>HEX #ffffff</MenuItem>
            <MenuItem value={"rgb"}>RGB rgb(255,255,255)</MenuItem>
            <MenuItem value={"rgba"}>RGBA rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      </div>
    );
  }
}

export default NavBar;
