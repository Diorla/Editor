//@ts-check

/**
 * @param {string} text - The text has will be truncated
 * @param {number} legnth - The maximum length of the text that will be returned
 * @param {string} replace - The text that is added to indicate that certain part of the text has been replaced
 */
export default (text, length = 14, replace = "...") => {
  if (text.length > length) return text.slice(0, length) + replace;
  return text;
};
