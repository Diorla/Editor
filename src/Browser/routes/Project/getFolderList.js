//@ts-check
import fs from "fs";
/**
 * @param {fs.PathLike} projectDir
 * @param {string[]} folderList
 * @param {(arg0: string[]) => void} setFolderList
 */
export default (projectDir, folderList, setFolderList) => {
  fs.readdir(projectDir, (err, data) => {
    if (err) throw err;
    // prevent infinite loop of update and re-render
    if (JSON.stringify(folderList) !== JSON.stringify(data))
      setFolderList(data);
  });
};
