//@ts-check

/**
 * It returns a float between two ranges, with the minimum and maximum being inclusive
 * @param {number} start - The fist end of the sequence indicating where to start (or end)
 * @param {number} end - The other end of the sequence indicating where to end (or start)
 * @param {any} integer? - Whether to return an integer or float, it is false by default
 */
export default (start, end, integer=false) => {
  return integer
    ? Math.round(Math.random() * (end - start) + start)
    : Math.random() * (end - start) + start;
};
