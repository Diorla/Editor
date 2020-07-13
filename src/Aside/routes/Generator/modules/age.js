//@ts-check
import { selectWithOdds, range } from "../../../../utils/random";

/**
 * @param {string} type? - One of child, teenager, adult or senior
 */
export default (type) => {
  const ranges = {
    child: [0, 12], //22.5
    teenager: [13, 19], //9.5
    adult: [20, 65], //60
    senior: [66, 120], //8
  };
  if (!type) type = selectWithOdds(Object.keys(ranges), [22.5, 9.5, 60, 8])[0];
  // @ts-ignore
  return Math.round(range(...ranges[type]));
};
