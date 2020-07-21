//@ts-check

import { educLevel } from "./education";
import { selectWithOdds } from "../utils/random";
/**
 * @param {
  "None"|
  "Preschool"|
  "Primary School"|
  "Junior Secondary School"|
  "Senior Secondary School"|
  "Diploma"|
  "Bachelor Degree"|
  "Masters"|
  "Doctorate"
} educationLevel
 */
export default (educationLevel) => {
  let odds = correlation.all;
  if (educLevel.slice(0, 2).includes(educationLevel))
    odds = correlation.presechool;
  else if (educLevel.slice(0, 4).includes(educationLevel))
    odds = correlation.junior;
  else if (educLevel.slice(0, 6).includes(educationLevel))
    odds = correlation.diploma;
  else if (educLevel.slice(0, 8).includes(educationLevel))
    odds = correlation.masters;
  else if (educLevel.includes(educationLevel)) odds = correlation.doctorate;
  return selectWithOdds(statusList, odds)[0];
};

export const statusList = [
  "Underclass", // None-Preschool
  "Working poor", // Primary school -JSS
  "Working class", // SS-Diploma
  "Lower middle class", //  Degree-Masters
  "Upper middle class", // Doctorate
  "Upper class", //
];

export const correlation = {
  presechool: [64, 16, 8, 4, 2, 1], // Preschool or lower
  junior: [32, 64, 16, 8, 4, 2], // Primary school or JSS
  diploma: [16, 32, 64, 16, 8, 4], // SS - Diploma
  masters: [8, 16, 32, 64, 16, 8], // Degree - Masters
  doctorate: [4, 8, 16, 32, 64, 16], // Doctorate
  all: [1, 2, 4, 4, 2, 1], // Doctorate
};
