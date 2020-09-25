import React, { Component } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./Palette.css";
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, type: "hex", snackBarOpen: false };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeColorFormat = this.changeColorFormat.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
      snackBarOpen: true,
    });
  }

  handleClose() {
    this.setState({
      snackBarOpen: false,
    });
  }
  render() {
    const { level, type, snackBarOpen } = this.state;
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
            return (
              <ColorBox color={color[type]} name={color.name} key={color.id} />
            );
          })}
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
      </div>
    );
  }
}

export default Palette;
