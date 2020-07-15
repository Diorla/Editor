//@ts-check
import { select, selectWithOdds } from "../../utils/random";

/**
 * @param {number} age?
 */
//www.watchranker.com/types-of-watch
//www.nanadc.com/blog/types-of-watch
export default (age) => {
  let digital = true;
  if (!age) digital = select([true, false])[0];
  else if (age <= 12) digital = selectWithOdds([true, false], [8, 2])[0];
  else if (age <= 19) digital = select([true, false])[0];
  else if (age <= 65) digital = selectWithOdds([true, false], [2, 8])[0];
  else digital = selectWithOdds([true, false], [1, 16])[0];
  return digital ? getDigital() : getAnalogue();
};

const getDigital = () => {
  const type = select(["digital watch", "hybrid watch", "smartwatch"])[0];
  const battery =
    type === "smartwatch"
      ? select(["", "Solar powered"]) // rechargeable or solar powered
      : select(["", "Solar powered"]); // replaceable or solar powered
  return `${battery} ${type}`;
};

const getAnalogue = () => {
  const type = selectWithOdds(
    ["Quartz", "Mechanical", "Kinetic", "Chronometer", "Spring drive"],
    [99, 2, 10, 1, 1]
  );
  return `${type} watch`;
};
