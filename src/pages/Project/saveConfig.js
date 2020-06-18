//@ts-check
import jsonfile from "jsonfile";

/**
 * @param {{}} state
 * @param {string} projectDir
 */
export default (state, projectDir) => {
  const temp = {
    ...state,
  };

  jsonfile.writeFile(`${projectDir}/.config`, temp, (err) => {
    console.log(err);
  });
};
