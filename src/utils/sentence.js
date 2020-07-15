//@ts-check
/**
 * Converts array to strings, formatted like a sentence e.g. ["red", "green", "blue"] becomes "red, green and blue"
 * @param {any[]} arr
 * @param {string} conj - the conjunction between the last two words e.g. "green and blue", "green or blue", "green with blue". The default is "and"
 * @param {string} sep - Used to separate the items in array, default is ","
 */
export default (arr, conj = "and", sep = ",") => {
  if (arr.length === 0) return "";
  else if (arr.length === 1) return arr[0];
  let str = "";
  /**
   * @param {any} phrase - a segment that needs to be broken down
   */
  arr.slice(0, -2).map((phrase) => (str += `${phrase}${sep} `));
  const [first, last] = arr.slice(-2);
  str += `${first} ${conj} ${last}`;
  return str;
};
