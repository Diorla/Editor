//@ts-check
import { selectWithOdds } from "../../utils/random";
/**
 * @param {any} gender
 * @param {"xl"|"l"|"m"|"xs"} weight
 */
export default (gender, weight = "m") => {
  const female = ["Flat chested", "Small breast", "", "Busty"];
  const male = ["", "Broad shoulder"];
  const bust = {
    xs: [15.9, 34.1, 40.9, 9.1],
    m: [2.3, 13.6, 75, 9.1],
    l: [2.3, 2.3, 51.2, 44.2],
    xl: [0.1, 2.1, 19.35, 78.35],
  };
  const chest = {
    xs: [10, 1],
    m: [5, 1],
    l: [5, 1],
    xl: [10, 1],
  };
  if (gender === "female") return selectWithOdds(female, bust[weight])[0];
  else return selectWithOdds(male, chest[weight])[0];
};
