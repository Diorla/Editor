//@ts-check
const { selectWithOdds } = require("../../utils/random");

/**
 * @param {"xl"|"l"|"m"|"xs"} weight
 */
export default (weight = "m") => {
  const stomach = {
    main: ["Flat stomach", "", "Big stomach"],
    xs: [68.2, 27.2, 4.6],
    m: [27.2, 68.2, 4.6],
    l: [4.6, 58, 37.4],
    xl: [0, 31.8, 68.2],
  };
  return selectWithOdds(stomach.main, stomach[weight])[0];
};
