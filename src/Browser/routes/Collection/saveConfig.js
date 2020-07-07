//@ts-check
import jsonfile from "jsonfile";

/**
 * @param {{id: string, title: string, description: string, template: string}} state
 * @param {string} projectDir
 */
export default (state, projectDir) => {
  jsonfile.writeFile(`${projectDir}/.config`, state, (err) => {
    console.log(err);
  });
};
