//@ts-check

/**
 * It returns a float between two ranges, with the minimum and maximum being inclusive
 * @param {number} start - The fist end of the sequence indicating where to start (or end)
 * @param {number} end - The other end of the sequence indicating where to end (or start)
 */
export default (start, end) => {
  return Math.random() * (end - start) + start;
};
