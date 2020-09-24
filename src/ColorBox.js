import React, { Component } from "react";
import "./ColorBox.css";
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ColorBox" style={{ backgroundColor: this.props.color }}>
        <span className="ColorBox-color-name">{this.props.name}</span>
        <button onClick={this.copyColor} className="ColorBox-button">
          Copy
        </button>
        <span className="ColorBox-see-more">More</span>
      </div>
    );
  }
}

export default ColorBox;
