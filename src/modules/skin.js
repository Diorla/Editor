//@ts-check
import { selectWithOdds } from "../utils/random";

/**
 * @param {"black"|"brown"|"white"} shade - trims down the type of skin colour
 */
export default (shade) => {
  if (Object.keys(colours).includes(shade))
    return selectWithOdds(colours[shade].item, colours[shade].odds)[0];
  else {
    const { black, brown, white } = colours;
    const items = [...black.item, ...brown.item, ...white.item];
    const odds = [...black.odds, ...brown.odds, ...white.odds];
    return selectWithOdds(items, odds)[0];
  }
};

export const colours = {
  black: {
    item: [
      "Walnut dark",
      "Espresso dark",
      "Earthy dark",
      "Chocolate dark",
      "Chestnut dark",
      "Truffle dark",
      "Ebony",
    ],
    odds: [1, 1, 1, 1, 1, 1, 1],
  },
  brown: {
    item: ["Tan", "Honey", "Golden", "Amber", "Caramel", "Almond"],
    odds: [1.4, 1.4, 1.4, 1.4, 1.4],
  },
  white: {
    item: ["Ivory white", "Porcelain white", "Beige", "Milky white"],
    odds: [1.75, 1.75, 1.75, 1.75],
  },
};
