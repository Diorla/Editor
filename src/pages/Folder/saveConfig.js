//@ts-check
import jsonfile from "jsonfile";

export default (state, projectDir) => {
  jsonfile.writeFile(`${projectDir}/.config`, state, (err) => {
    console.log(err);
  });
};
