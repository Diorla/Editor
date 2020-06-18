//@ts-check
import jsonfile from "jsonfile";

/**
 * @param {string} projectDir
 * @param {(arg0: NodeJS.ErrnoException) => void} errFn
 * @param {(arg0: {}|[]) => void} successFn
 */
export default (projectDir, errFn, successFn) => {
  jsonfile.readFile(`${projectDir}/.config`, (err, val) => {
    if (err) {
      // create a .config file and populate it with default values
      errFn(err);
    } else {
      // compare current data with incoming data
      // if needed, update current data
      successFn(val)
    }
  });
  
}