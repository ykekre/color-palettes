import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.copyColor = this.copyColor.bind(this);
  }

  copyColor() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }

  render() {
    const { color, name } = this.props;
    const isCopied = this.state.copied;
    return (
      <CopyToClipboard text={color} onCopy={this.copyColor}>
        <div className="ColorBox" style={{ backgroundColor: color }}>
          <div
            className={`CopyOverlay ${isCopied ? "show" : ""}`}
            style={{ backgroundColor: color }}
          />
          <div className={`CopyOverlay-message ${isCopied ? "show" : ""}`}>
            <h1>Copied!</h1>
            <p>{color}</p>
          </div>

          <span className="ColorBox-color-name">{name}</span>
          <button onClick={this.copyColor} className="ColorBox-button">
            Copy
          </button>
          <span className="ColorBox-see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
