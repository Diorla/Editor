//@ts-check
import jsonfile from "jsonfile";
/**
 * @param {string} projectDir
 * @param {{}} state
 * @param {(arg0: {}) => void} updateState
 */
export default (projectDir, state, updateState) => {
  jsonfile.readFile(`${projectDir}/.config`, (err, val) => {
    if (err) console.log(err);
    else {
      // doesn't update state if .config == state
      if (JSON.stringify(val) !== JSON.stringify(state))
        updateState({
          type: "setAll",
          payload: {
            ...val,
          },
        });
    }
  });
};
