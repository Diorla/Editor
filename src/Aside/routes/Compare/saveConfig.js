//@ts-check
import jsonfile from "jsonfile";

/**
 * @param {object} state
 * @param {string} projectDir
 */
export default (state, projectDir) => {
  jsonfile.writeFile(projectDir, state, (err) => {
    console.log(err);
  });
};
