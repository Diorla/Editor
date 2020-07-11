//@ts-check
/**
 * Generates a radom value from the set of arrays available with every item having equal odds
 * @param {any[]} arr
 * @param {number} length
 */
export default (arr, length = 1) => {
  let tempArr = [...arr];
  let result = [];
  while (length) {
    [result, tempArr] = random(result, tempArr);
    length--;
  }
  return result;
};

/**
 * @param {any[]} result
 * @param {any[]} tempArr
 */
const random = (result, tempArr) => {
  const index = Math.floor(Math.random() * tempArr.length);
  return [
    [tempArr[index], ...result],
    [...tempArr.slice(0, index), ...tempArr.slice(index + 1)],
  ];
};
