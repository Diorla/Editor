//@ts-check
import sentence from "../../utils/sentence";
import { selectWithOdds } from "../../utils/random";

/**
 * @param {"xxl"|"xl"|"l"|"m"|"s"|"xs"|"xxs"} height
 * @param {"xl"|"l"|"m"|"xs"} weight
 */
export default (height = "m", weight = "m") => {
  const limbs = [];
  const weightOdds = {
    xs: [68.2, 27.2, 4.6],
    m: [27.2, 68.2, 4.6],
    l: [4.6, 58, 37.4],
    xl: [0, 31.8, 68.2],
  };
  const heightOdds = {
    xxl: [34.1, 4.2, 0.1],
    xl: [34.1, 13.6, 4.2],
    l: [13.6, 34.1, 4.2],
    m: [13.6, 34.1, 13.6],
    s: [4.2, 34.1, 13.6],
    xs: [4.2, 13.6, 34.1],
    xxs: [0.1, 4.2, 34.1],
  };
  const length = getLength(heightOdds[height]);
  const thickness = getThickness(weightOdds[weight]);
  if (length) {
    if (thickness === "Skinny legs") limbs.push(`${length} ${thickness}`);
    else limbs.push(`${length} legs and ${thickness}`);
  }
  const size = getSize(heightOdds[height]);
  if (size) limbs.push(size);
  return sentence(limbs, "with");
};

/**
 * @param {number[]} odds
 */
const getLength = (odds) => {
  const length = ["Long", "", "Short"];
  return selectWithOdds(length, odds)[0];
};

/**
 * @param {number[]} odds
 */
const getSize = (odds) => {
  const size = ["Large hands & feet", "", "Small hands & feet"];
  return selectWithOdds(size, odds)[0];
};

/**
 * @param {number[]} odds
 */
const getThickness = (odds) => {
  const thickness = ["Big thighs", "", "Skinny legs"];
  return selectWithOdds(thickness, odds)[0];
};
