//@ts-check
import path from "path";
/**
 * Removes any file extension e.g. "test.js" becomes "test" and "utils.spec.min.js" becomes "utils.spec.min"
 * @param {string} str
 */
export default (str) => path.basename(str).split(".").slice(0, -1).join(".");
