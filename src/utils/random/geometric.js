//@ts-check

/**
 * Uses odds based on arithmetric progression based on the increment e.g. +1 = [1, 2, 3, 4] or + 10 = [1, 10, 21, 31]
 * @param {any[]} arr - The items to be processed
 * @param {number} length - The number of items to be returned
 * @param {number} increment - The rate in geometric progression. Note, it has to be greater than 1
 */
export default (arr, length = 1, increment = 2) => {
  let tempArr = [...arr];
  let result = [];
  let total = 0;
  let totalOdds = _arithmetic(tempArr, increment).map((n) =>
    Number((total += n).toFixed(2))
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

/**
 * @param {any[]} arr
 * @param {number} incr
 */
const _arithmetic = (arr, incr) => {
  let odds = [];
  let prev = 1;
  let next = 1;
  for (let i of arr) {
    odds.push(prev);
    next *= incr;
    prev = next;
  }
  return odds;
};
