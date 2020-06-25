//@ts-check
import jsonfile from "jsonfile";
import fs from "fs";
import generateHash from "../../utils/generateHash";

/**
 * @param {string} fileName
 * @param {fs.PathLike} projectDir
 * @param {string[]} fileList
 * @param {(arg0: string[]) => void} setFileList
 * @param {(arg0: string) => void} setFileName
 * @param {(arg0: string) => void} setError
 * @param {{template: string}} state
 */
export default (
  fileName,
  projectDir,
  fileList,
  setFileList,
  setFileName,
  setError,
  state
) => {
  if (!fileList.includes(fileName)) {
    jsonfile.readFile(
      // process.cwd() + "/templates/" + state.template + ".json",
      `${process.cwd()}/templates/${state.template}.json`,
      (err, val) => {
        if (err) console.log("template error:", err);
        else {
          jsonfile.writeFile(
            `${projectDir}/${fileName}.scrb`,
            {
              id: generateHash(),
              name: fileName,
              ...val,
            },
            (err) => {
              console.log(err);
              // update file list
              fs.readdir(projectDir, (err, files) => {
                if (err) console.log(err);
                else setFileList(files);
                // reset input
                setFileName("");
              });
            }
          );
        }
      }
    );
  } else setError("File already exist");
};
