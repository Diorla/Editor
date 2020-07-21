//@ts-check
import { selectWithOdds } from "../../utils/random";
import { title } from "string-007";

/**
 * @param {"xs" | "xl" | "l" | "m" } weight - One of "xl", "l", "m", "xs" indicating obese, overweight, normal and underweight respectively
 * @param {string} hairColour
 */
export default (weight, hairColour) => {
  const shape = selectWithOdds(
    [
      "Oval face",
      "Long face",
      "Oblong face",
      "Round face",
      "Square face",
      "Heart-shaped face",
      "Triangular face",
      "Diamond-shaped face",
      "Pyramidal face",
    ],
    [20, 20, 10, 20, 20, 5, 5, 5, 5]
  )[0];

  // overweight people usually have double chins
  const doubleChin =
    weight === "xl"
      ? selectWithOdds(["", "Double Chinned"], [27.2, 72.8])[0]
      : "";

  // Double chin will override dimpled chin
  const chin = doubleChin
    ? doubleChin
    : selectWithOdds(["", "Dimpled chin"], [27.2, 72.8])[0];

  // There is higher chance of freckles in red hair than dark hair(or dark skinned)
  let frecklesOdd = [2.1, 97.9];
  if (hairColour === "red") frecklesOdd = [34.1, 65.9];
  else if (hairColour === "blonde") frecklesOdd = [13.6, 86.4];
  const freckles = selectWithOdds(["", "Freckled"], frecklesOdd)[0];
  const forehead = selectWithOdds(["Big forehead", ""], [13.8, 86.2])[0];

  let face = "";
  if (freckles) face += freckles;
  face += ` ${shape}`;
  if (chin) face += ` with ${chin}.`;
  if (forehead) face += `and ${forehead}`;
  return title(face);
};
