//@ts-check
/**
 * Select one or more items with each item having different odds
 * @param {any[]} arr
 * @param {number[]} odds
 * @param {number} length
 */
export default (arr, odds, length = 1) => {
  let tempArr = [...arr];
  let result = [];
  let total = 0;
  let totalOdds = odds.map(
    /**
     * @param {number} n
     */
    (n) => Number((total += n).toFixed(2))
  );
  while (length) {
    [result, tempArr, totalOdds] = random(result, tempArr, totalOdds);
    length--;
  }
  return result;
};

/**
 * @param {any[]} result
 * @param {any[]} tempArr
 * @param {number[]} totalOdds
 */
const random = (result, tempArr, totalOdds) => {
  let target = Math.floor(Math.random() * totalOdds[totalOdds.length - 1]);
  for (let index = 0; index < tempArr.length; index++) {
    if (totalOdds[index] > target) {
      return [
        [tempArr[index], ...result],
        [...tempArr.slice(0, index), ...tempArr.slice(index + 1)],
        [...totalOdds.slice(0, index), ...totalOdds.slice(index + 1)],
      ];
    }
  }
};
