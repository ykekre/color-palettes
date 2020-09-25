import chroma from "chroma-js";

const colorsGenerator = (starterPalette) => {
  const newPallete = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };

  const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  for (const level of levels) {
    newPallete.colors[level] = [];
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
      newPallete.colors[levels[index]].push({
        name: `${iThColor.name} ${levels[index]}`,
        id: iThColor.name.toLowerCase().replace(/\s/g, "-"),
        hex: shade,
        rgb: chroma(shade).css(),
        rgba: chroma(shade).css().replace("rgb", "rgba").replace(")", ",1.0)"),
      });
    }
  }
  return newPallete;
};

export { colorsGenerator };
