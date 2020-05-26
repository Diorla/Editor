//@ts-check
/**
 * @param {string | any[]} arr
 */
const _withoutOdds = (arr) => {
  const total = arr.length;
  const index = Math.floor(Math.random() * total);
  return arr[index];
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
    next += 5;
    prev += next;
    coeffArr.push(prev);
  }
  let pascal = [...coeffArr];
  coeffArr.reverse();
  if (isEven) pascal.push(...coeffArr);
  else pascal.push(...coeffArr.slice(1));
  return pascal;
};

/**
 * @param {string | any[]} arr
 * @param {any[]} odds
 */
const _withOdds = (arr, odds) => {
  if (!odds.length && odds) odds = _gaussian(arr);
  let total = 0;
  let totalOdds = odds.map((n) => Number((total += n).toFixed(2)));
  let target = Math.floor(Math.random() * totalOdds[totalOdds.length - 1]);
  for (let i = 0; i < arr.length; i++) {
    if (totalOdds[i] > target) return arr[i];
  }
};


/**
 * @param {any[]} arr
 * @param {number[]} [odds]
 */
const oddCalculator = (arr, odds) =>
  odds ? _withOdds(arr, odds) : _withoutOdds(arr);

export default oddCalculator;
