//@ts-check
import { select } from "../utils/random";

/**
 * @param {string} posture
 */
export default (posture) => {
  if (posture) {
    //"Casual and relaxed" "Slouching", "Hunched" "Stiff", "Chest out"
    if (posture === "Casual and relaxed")
      return select([gaits[0], gaits[1], gaits[6], gaits[7]])[0];
    else if (posture === "Slouching")
      return select([gaits[0], gaits[1], gaits[5], gaits[6], gaits[7]])[0];
    else if (posture === "Hunched")
      return select([gaits[0], gaits[1], ...gaits.slice(3)])[0];
    else if (posture === "Stiff")
      return select([gaits[2], gaits[3], gaits[4]])[0];
    else if (posture === "Chest out")
      return select([...gaits.slice(2, 5), gaits[6], gaits[7]])[0];
  }
  return select(gaits)[0];
};
// casual=> 0167
// slouching=> 01567
// hunched=> 0134567
// stiff=> 234
// chest=>23467
export const gaits = [
  "Drags feet on the floor",
  "Walks Absentmindedly",
  "Confident powerful strides",
  "Pacy",
  "Quick short steps",
  "Walks with eyes on the ground",
  "Distracted while walking e.g. with phone or book",
  "Strolls",
];
