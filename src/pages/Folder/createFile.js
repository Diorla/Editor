//@ts-check
import jsonfile from "jsonfile";
import fs from "fs";

const logger = (template) => {
  let placeholder = {
    type: "default",
    data: [],
  };
  jsonfile.readFile(
    process.cwd() + "/templates/" + template + ".json",
    (err, val) => {
      if (err) console.log("template error:", err);
      else console.log("template:", val);
    }
  );
  // if (template === "Character") console.log("t");
  // else if (template === "Story") console.log("t");
  // else if (template === "Creature") console.log("t");
  // else if (template === "Location") console.log("t");
  // else if (template === "Magic") console.log("t");
  // else if (template === "Objects") console.log("t");
  // else if (template === "World") console.log("t");
  // else if (template === "Organisation") console.log("t");
};
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
    logger(state.template);
    jsonfile.writeFile(
      `${projectDir}/${fileName}.scrb`,
      [{ type: "Testing" }],
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
  } else setError("File already exist");
};
