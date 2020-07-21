//@ts-check
import { pascal } from "../utils/random";

/**
 * @param {number} age - default is 24
 */
export default (age = 24) => {
  const educations = [];
  if (age <= 3) educations.push(...educLevel.slice(0, 1));
  else if (age <= 9) educations.push(...educLevel.slice(0, 2));
  else if (age <= 12) educations.push(...educLevel.slice(0, 3));
  else if (age <= 15) educations.push(...educLevel.slice(0, 4));
  else if (age <= 17) educations.push(...educLevel.slice(0, 5));
  else if (age <= 19) educations.push(...educLevel.slice(0, 6));
  else if (age <= 21) educations.push(...educLevel.slice(0, 7));
  else educations.push(...educLevel);
  return pascal(educations)[0];
};

export const educLevel = [
  "None",
  "Preschool",
  "Primary School",
  "Junior Secondary School", // Elementary school
  "Senior Secondary School", // High school
  "Diploma", // Associate degree
  "Bachelor Degree",
  "Masters",
  "Doctorate",
];
