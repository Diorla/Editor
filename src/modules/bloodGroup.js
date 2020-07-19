import { selectWithOdds } from "../utils/random";

//@ts-check
/**
 * This generates ABO blood groups
 */
export default () => {
  return selectWithOdds(
    bloodGroups.map((item) => item[0]),
    bloodGroups.map((item) => item[1])
  )[0];
};

// This data is based on global distribution and sourced from "https://www.wikipedia.org/wiki/Blood_type_distribution_by_country"
export const bloodGroups = [
  ["AB-", 0.36],
  ["B-", 1.11],
  ["A-", 1.99],
  ["O-", 2.5],
  ["AB+", 5.88],
  ["B+", 22.02],
  ["A+", 27.42],
  ["O+", 38.67],
];
