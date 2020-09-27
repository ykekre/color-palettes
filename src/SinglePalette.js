import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./NavBar";
import ColorBox from "./ColorBox";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./Palette.css";
import "./ColorBox.css";
import { Link } from "react-router-dom";
class SinglePalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "hex",
      snackBarOpen: false,
    };

    this.changeColorFormat = this.changeColorFormat.bind(this);
  }

  changeColorFormat(type) {
    //* this method is passed as a prop to navbar so that
    //* it can communicate back what color format was chosen by user
    this.setState({
      type: type,
      snackBarOpen: true,
    });
  }
  render() {
    const { type, snackBarOpen } = this.state;
    const { colors, paletteName, emoji, id } = this.props.palette;
    return (
      <div className="Palette">
        <NavBar //* method to record color format 'type' in state
          changeColorFormat={this.changeColorFormat}
          type={type}
          isForSingleColor={true}
        />
        <div className="Palette-Colors">
          {colors.map((color) => {
            return (
              <ColorBox
                color={color[type]}
                name={color.name}
                key={uuidv4()}
                paletteId={id}
                colorId={color.id}
                isForSingleColor={true}
              />
            );
          })}
          <Link
            to={`/palettes/${id}`}
            className="ColorBox larger"
            style={{ backgroundColor: "black" }}
          >
            <button className="ColorBox-button backButton">GO BACK</button>
          </Link>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={snackBarOpen}
          autoHideDuration={3000}
          onClose={this.handleClose}
          message={`Format Changed to ${type.toUpperCase()}`}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
        <footer className="Palette-footer">
          <p className="Footer-name">{paletteName}</p>
          <span className="Footer-emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default SinglePalette;
