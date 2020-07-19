//@ts-check
import { selectWithOdds, select } from "../utils/random";

/**
 * @param {boolean} useBinary
 * @param {[string, number][]} extra
 */
export default (useBinary = false, ...extra) => {
  const genders = [
    ["male", 4.5],
    ["female", 4.5],
  ];
  const nonBinary = ["non binary", 1];
  if (useBinary) return select(genders.map((item) => item[0]))[0];
  else {
    if (extra.length) {
      return selectWithOdds(
        [...genders, ...extra].map((item) => item[0]),
        [...genders, ...extra].map((item) => Number(item[1]))
      )[0];
    } else
      return selectWithOdds(
        [...genders, nonBinary].map((item) => item[0]),
        [...genders, nonBinary].map((item) => Number(item[1]))
      )[0];
  }
  // return selectWithOdds
};
