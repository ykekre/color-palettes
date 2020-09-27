import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  colorbox: {},
  container: {},

  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fffafa",
    cursor: "pointer",

    "& $container": {
      display: "flex",
      flexWrap: "wrap",
      height: "76%",

      "& $colorbox": {
        height: "25%",
        width: "20%",
      },
    },
  },
  text: {
    height: "24%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& h3": {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "500",
      color: "rgba(0, 0, 0, 0.54)",
      marginLeft: "1%",
      marginRight: "1%",
    },
    "& span": {
      fontSize: "1.5rem",
      marginRight: "1%",
      paddingRight: "1%",
    },
  },
};
function MiniPalette(props) {
  const { classes } = props;
  const { colors, emoji, paletteName, id } = props.palette;

  return (
    //* handleClick will invoke and pass the id param to gotoPaletteID function
    <div className={classes.root} onClick={() => props.handleClick(id)}>
      <div className={classes.container}>
        {colors.map((c) => {
          return (
            <div
              className={classes.colorbox}
              style={{ background: c.color }}
              key={c.name}
            ></div>
          );
        })}
      </div>
      <div className={classes.text}>
        <h3 className="name">{paletteName}</h3>
        <span className="emoji">{emoji}</span>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
