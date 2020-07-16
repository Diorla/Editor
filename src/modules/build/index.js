//@ts-check
import { selectWithOdds } from "../../utils/random";
import sentence from "../../utils/sentence";
import getStomach from "./getStomach";
import getLimbs from "./getLimbs";
import getHip from "./getHip";
import getChest from "./getChest";
import getBody from "./getBody";

/**
 * @param {"xxl"|"xl"|"l"|"m"|"s"|"xs"|"xxs"} height
 * @param {"xl"|"l"|"m"|"xs"} weight
 * @param {string} gender - only "male" and "female", any other gender will default to "male"
 */
export default (height, weight, gender) => {
  const limbs = getLimbs(height, weight);
  const stomach = getStomach(weight);
  const chest = getChest(weight, gender);
  const hips = getHip(weight, gender);
  const body = getBody(weight, height);
  let build = "";
  [limbs, stomach, chest, hips, body].map((item) => {
    if (item) build += ` ${item}.`;
  });
  return build;
};
