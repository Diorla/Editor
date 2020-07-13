//@ts-check
import { arithmetic, range } from "../../../../utils/random";

/**
 * Returns the weight based on the height and body mass index categories
 * @param {number} height - The height in centimetre (cm)
 * @param {"xs" | "xl" | "l" | "m" } category - One of "xl", "l", "m", "xs" indicating obese, overweight, normal and underweight respectively
 */
export default (height, category) => {
  // bmi = kg/m^2
  const bmi = {
    xs: [15.75, 18.5], // underweight < 18.5 (15.75)
    xl: [30, 32.75], // obese 30 to (32.75)
    l: [25, 29.9], // overweight 25 to 29.9
    m: [18.6, 24.9], // normal 18.6 to 24.9
  };
  category = category || arithmetic(Object.keys(bmi), 10)[0];
  height = height / 100; // convert to metre
  // @ts-ignore
  const size = range(...bmi[category]);
  return size * height ** 2; //bmi * m^2
};

// I'm going to deduce the "weight" by using height and bmi instead of the data below. I'm just going to keep it for now
// weights comes from www.disabled-world.com/calculators-charts/height-weight-teens
const weights = {
  female: {
    //cm
    2: 12,
    3: 14.2,
    4: 15.4,
    5: 17.9,
    6: 29.9,
    7: 22.4,
    8: 25.8,
    9: 28.1,
    10: 31.9,
    11: 36.9,
    12: 41.5,
    13: 45.8,
    14: 47.6,
    15: 52.1,
    16: 53.5,
    17: 54.4,
    18: 56.7,
    19: 57.1,
    20: 58.0,
  },
  male: {
    //cm
    2: 12.5,
    3: 14,
    4: 16.3,
    5: 18.4,
    6: 20.6,
    7: 22.9,
    8: 25.6,
    9: 28.6,
    10: 32,
    11: 35.6,
    12: 39.9,
    13: 45.3,
    14: 50.8,
    15: 56,
    16: 60.8,
    17: 64.4,
    18: 66.9,
    19: 68.9,
    20: 70.3,
  },
};
