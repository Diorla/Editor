//@ts-check

import { selectWithOdds } from "../../utils/random";

/**
 * @param {"xl"|"l"|"m"|"xs"} weight
 * @param {any} gender
 */
export default (gender, weight = "m") => {
  const hipSizes = [
    "Very small hips",
    "Small hips",
    "",
    "Big hips",
    "Very big hips",
  ];
  const weightOdds = {
    xs: [15.9, 34.1, 34.1, 13.6, 2.3],
    m: [2.3, 13.6, 68.2, 13.6, 2.3],
    l: [2.3, 2.3, 34.1, 34.1, 27.2],
    xl: [0.1, 2.1, 2.3, 34.1, 61.3],
    male: [0.2, 4.2, 81.8, 13.6, 0.2],
  };
  if (gender === "female")
    return selectWithOdds(hipSizes, weightOdds[weight])[0];
  else return selectWithOdds(hipSizes, weightOdds["male"])[0];
};
