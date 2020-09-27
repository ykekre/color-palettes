import React, { Component } from "react";
import Slider from "react-input-slider";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
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
  static defaultProps = {
    isForSingleColor: false,
  };
  render() {
    const { level, changeLevel, type, isForSingleColor } = this.props;
    return (
      <div className="NavBar">
        <Link to="/" className="NavBar-logo">
          Palette-Picker
        </Link>
        {/** ** if isForSingleColor is true then this nav comp. is being rendered
         ** for a single palette so we dont show this element */}
        <span className={isForSingleColor ? "hide" : undefined}>
          Level: {level}
        </span>
        <Slider
          axis="x"
          xstep={100}
          xmin={100}
          xmax={900}
          x={level}
          //* communicate back to Palette comp state, what new level is
          onChange={changeLevel}
          /**
           ** if isForSingleColor is true then this nav comp. is being rendered * for a single palette so we dont show this element
           */
          className={`${isForSingleColor && "hide"} navSlider`}
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
            value={type}
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
