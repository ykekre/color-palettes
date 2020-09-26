import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";

const styles = {
  paletteList: {
    height: "100vh",
    backgroundColor: "#00a8ff66",
  },

  nav: {
    display: "flex",
    width: "60%",
    margin: "0 auto",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "2%",

    "& span": {
      fontFamily: "'Pacifico', cursive",
      fontWeight: "200",
      fontSize: "2rem",
      marginLeft: "1%",
    },

    "& a": {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 300,
      padding: 5,
      color: "rgba(0, 0, 0, 0.54)",
      fontSize: "1.1rem",
      marginRight: "5%",
    },
  },

  palettesContainer: {
    display: "flex",
    height: "80%",
    width: "60%",
    margin: "0 auto",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  eachPalette: {
    width: "30%",
    height: "25%",
    margin: "1% 1%",
  },
};
class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goToPaletteID = this.goToPaletteID.bind(this);
  }

  goToPaletteID(id) {
    console.log(id, this.props);
    this.props.history.push(`/palettes/${id}`);
  }
  render() {
    const { classes, palettes } = this.props;
    return (
      <div className={classes.paletteList}>
        <div className={classes.nav}>
          <span className={classes.navTitle}>Palettes Picker</span>
          <Link to="/" className={classes.navButton}>
            Create Palette
          </Link>
        </div>

        <div className={classes.palettesContainer}>
          {palettes.map((p) => {
            return (
              <div className={classes.eachPalette} key={p.id}>
                {/* <Link to={`/palettes/` + p.id}> */}
                <MiniPalette palette={p} handleClick={this.goToPaletteID} />
                {/* </Link> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
