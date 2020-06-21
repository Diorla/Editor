//@ts-check

/**
 * @param {string} word
 */
export default (word) =>
  word.slice(0, 1).toUpperCase() + word.slice(1).toLocaleLowerCase();
