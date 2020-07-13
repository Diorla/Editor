//@ts-check
import { range, geometric } from "../../../../utils/random";

/**
 * @param {"male"|"female"} gender - This is biological sex ie. male or female
 * @param {number} age - This age is from 2 to 20 years of age. It uses the same scheme for anyone above 20 years of age. Below 2 will return zero
 * @param {"xxl"|"xl"|"l"|"m"|"s"|"xs"|"xxs"} type - The sizes ranging from very tall to very short represented by "xxl", "xl", "l", "m", "s", "xs" and "xxs"
 */
export default (gender = "male", age = 20, type) => {
  const sizes = {
    xxl: 6, // very tall
    xxs: -6, // very short
    xl: 4, // tall
    xs: -4, // short
    l: 2, // slightly tall
    s: -2, // slightly short
    m: 0, // average
  };
  if (age === 0) return 0;
  if (age > 20) age = 20; // same for all adults
  type = type || geometric(Object.keys(sizes), 1, 10)[0];
  const min = heights[gender][age] - 3;
  const max = heights[gender][age] + sizes[type];
  return range(min, max);
};
// heights comes from www.disabled-world.com/calculators-charts/height-weight-teens
const heights = {
  female: {
    //cm
    2: 85.5,
    3: 94,
    4: 100.3,
    5: 107.9,
    6: 115.5,
    7: 121.1,
    8: 128.2,
    9: 133.3,
    10: 138.4,
    11: 144,
    12: 149.8,
    13: 156.7,
    14: 158.7,
    15: 159.7,
    16: 162.5,
    17: 162.5,
    18: 163,
    19: 163,
    20: 163.3,
  },
  male: {
    //cm
    2: 86.8,
    3: 95.2,
    4: 102.3,
    5: 109.2,
    6: 115.5,
    7: 121.1,
    8: 128,
    9: 133.3,
    10: 138.4,
    11: 143.5,
    12: 149.1,
    13: 156.2,
    14: 163.8,
    15: 170.1,
    16: 173.4,
    17: 175.2,
    18: 175.7,
    19: 176.5,
    20: 177,
  },
};
