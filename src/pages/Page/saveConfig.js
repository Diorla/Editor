//@ts-check
import jsonfile from "jsonfile";

/**
 * @param {any} state
 * @param {any} projectDir
 */
export default (state, projectDir) => {
  jsonfile.writeFile(projectDir, state, (err) => {
    console.log(err);
  });
};
