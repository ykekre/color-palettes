import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import "./ColorBox.css";
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.copyColor = this.copyColor.bind(this);
  }

  static defaultProps = {
    isForSingleColor: false,
  };
  copyColor() {
    //* Effect to show the copied color message overlay only for a sec or two
    //* while 'copied' is true
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }

  render() {
    const { color, name, paletteId, colorId, isForSingleColor } = this.props;
    const isCopied = this.state.copied;
    return (
      /**
       * *when comp. is clicked, the color is copied,
       * * onCopy method is called, which sets state to 'copied: true'
       * * which adds the show class to the overlay
       * * after a moment the show class is removed
       **/
      <CopyToClipboard text={color} onCopy={this.copyColor}>
        <div
          /**
           * *if isForSingleColor is true it means this colorbox is to be rendered for a single palette, so it will be with a larger height
           */
          className={`ColorBox ${isForSingleColor && "larger"}`}
          style={{ backgroundColor: color }}
        >
          <div
            className={`CopyOverlay ${isCopied ? "show" : ""}`}
            style={{ backgroundColor: color }}
          />
          <div className={`CopyOverlay-message ${isCopied ? "show" : ""}`}>
            <h1>Copied!</h1>
            <p>{color}</p>
          </div>

          <span className="ColorBox-color-name">{name}</span>
          <button className="ColorBox-button">Copy</button>
          <Link
            to={`/palettes/${paletteId}/${colorId}`}
            /**
             * *when user clicks on the MORE link, the click event is propagated upwards to the ColorBox component and
             * ! the copied color animation and overlay is flashed on screen for a brief moment
             * * so to stop that we use stopPropagation()
             */
            onClick={(e) => e.stopPropagation()}
          >
            <span className="ColorBox-see-more">More</span>
          </Link>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
