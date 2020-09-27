import chroma from "chroma-js";

const colorsGenerator = (starterPalette, colorId) => {
  const newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };

  const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  for (const level of levels) {
    newPalette.colors[level] = [];
  }
  const getRange = (baseColor) => {
    return [chroma(baseColor).darken(1.5), baseColor, "#ffffff"];
  };

  const generateScale = (baseColor, noOfColors) => {
    return chroma
      .scale(getRange(baseColor.color))
      .mode("lab")
      .colors(noOfColors)
      .reverse();
  };

  for (const iThColor of starterPalette.colors) {
    //* Take one color of the palette and get arr of shades
    const iThColorScale = generateScale(iThColor, 10);

    //* Add each individual shade of this scale to the respective element of newPalette.colors object
    for (const [index, shade] of iThColorScale.entries()) {
      newPalette.colors[levels[index]].push({
        name: `${iThColor.name} ${levels[index]}`,
        id: iThColor.name.toLowerCase().replace(/\s/g, "-"),
        hex: shade,
        rgb: chroma(shade).css(),
        rgba: chroma(shade).css().replace("rgb", "rgba").replace(")", ",1.0)"),
      });
    }
  }

  if (colorId) {
    /**
     * *If colorId exists it means this function has been called to generate a palette for a single color. So we traverse the newPalette which has all the shades for all the color and then based on colorID we only pick the matching shades and add it to a separate array and create a palette and return
     *
     */

    const singleColorScale = [];
    for (const colorLevel in newPalette.colors) {
      if (newPalette.colors.hasOwnProperty(colorLevel)) {
        const colorLevelArr = newPalette.colors[colorLevel];

        for (const color of colorLevelArr) {
          if (color.id === colorId) {
            singleColorScale.push({
              name: color.name,
              id: color.id,
              hex: color.hex,
              rgb: color.rgb,
              rgba: color.rgba,
            });
          }
        }
      }
    }

    return {
      paletteName: starterPalette.paletteName,
      id: starterPalette.id,
      emoji: starterPalette.emoji,
      colors: singleColorScale.slice(1),
    };
  }
  return newPalette;
};

export { colorsGenerator };
