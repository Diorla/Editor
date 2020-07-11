//@ts-check

/**
 * Uses pascal equation to generate odds with the extremes having lower possibilities e.g. 5 items will have the odds of [1, 3, 6, 3, 1]
 * @param {any[]} arr
 * @param {number} length
 */
export default (arr, length = 1) => {
  let tempArr = [...arr];
  let result = [];
  let total = 0;
  let totalOdds = _gaussian(tempArr).map((n) =>
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
 * @param {string | any[]} arr
 */
const _gaussian = (arr) => {
  let prev = 0;
  let next = 0;
  let coeffArr = [];
  let max = Math.ceil(arr.length / 2);
  let isEven = arr.length % 2 == 0;
  for (let i = 1; i <= max; i++) {
    next += 1;
    prev += next;
    coeffArr.push(prev);
  }
  let pascal = [...coeffArr];
  coeffArr.reverse();
  if (isEven) pascal.push(...coeffArr);
  else pascal.push(...coeffArr.slice(1));
  return pascal;
};
