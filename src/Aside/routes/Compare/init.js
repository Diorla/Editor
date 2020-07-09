//@ts-check
import jsonfile from "jsonfile";

/**
 * @param {jsonfile.Path} fileDir
 * @param {(arg0: any) => void} setState
 */
export default (fileDir, setState) => {
  jsonfile.readFile(fileDir, (err, data) => {
    if (err) console.log(err);
    else setState(data);
  });
};
