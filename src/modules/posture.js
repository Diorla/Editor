//@ts-check
import { select } from "../utils/random";

/**
 * @param {string} gait
 */
export default (gait) => {
  if (gait) {
    if (["Drags feet on the floor", "Walks Absentmindedly"].includes(gait))
      return select(["Casual and relaxed", "Slouching", "Hunched"])[0];
    else if (gait === "Confident powerful strides")
      return select(["Stiff", "Chest out"])[0];
    else if (["Pacy", "Quick short steps"].includes(gait))
      return select(["Stiff", "Chest out", "Hunched"])[0];
    else if (gait === "Walks with eyes on the ground")
      return select(["Slouching", "Hunched"])[0];
    else if (
      ["Distracted while walking e.g. with phone or book", "Strolls"].includes(
        gait
      )
    )
      return select([
        "Casual and relaxed",
        "Chest out",
        "Slouching",
        "Hunched",
      ])[0];
  }
  return select(postures)[0];
};

export const postures = [
  "Stiff", // (military)
  "Casual and relaxed",
  "Chest out",
  "Slouching",
  "Hunched", // Turtle ?
];