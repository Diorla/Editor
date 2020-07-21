//@ts-check
import hair from "./hair";
import ear from "./ear";
import face from "./face";
import lips from "./lips";
import nose from "./nose";
import sentence from "../../utils/sentence";

/**
 * @param {"xs" | "xl" | "l" | "m" } weight - One of "xl", "l", "m", "xs" indicating obese, overweight, normal and underweight respectively
 * @param {string} hairColour
 * @param {any} maleLike
 */
export default (weight, hairColour, maleLike) => {
  const features = [ear(), lips(), nose(), face(weight, hairColour)];
  maleLike ? features.push(hair()) : "";
  return sentence(features);
};
