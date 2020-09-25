import React, { Component } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import "./Palette.css";
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, type: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }

  changeLevel(newLevel) {
    //* newLevel is an object returned by the Slider component onChange
    //* eg {x:600, y:0}
    this.setState({ level: parseFloat(newLevel.x.toFixed(2)) });
  }
  changeColorFormat(type) {
    //* this method is passed as a prop to navbar so that
    //* it can communicate back what color format was chosen by user
    this.setState({
      type: type,
    });
  }
  render() {
    const { level, type } = this.state;
    return (
      <div className="Palette">
        <NavBar
          //* slider level
          level={level}
          //* method to record the changed level of slider in the state
          changeLevel={this.changeLevel}
          //* method to record color format 'type' in state
          changeColorFormat={this.changeColorFormat}
          type={type}
        />
        <div className="Palette-Colors">
          {this.props.palette[level].map((color) => {
            return <ColorBox color={color[type]} name={color.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default Palette;
