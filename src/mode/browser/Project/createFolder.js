//@ts-check
import fs from "fs";
import jsonfile from "jsonfile";
import generateHash from "../../../utils/generateHash";

/**
 * @param {fs.PathLike} projectDir
 * @param {string} folderName
 * @param {(arg0: string[]) => void} setFolderList
 * @param {(arg0: string) => void} setFolderName
 */
export default (projectDir, folderName, setFolderList, setFolderName) => {
  fs.mkdir(`${projectDir}/${folderName}`, { recursive: true }, (err) => {
    if (err) console.log(err);
    else {
      jsonfile.writeFile(
        `${projectDir}/${folderName}/.config`,
        {
          id: generateHash(),
          title: folderName,
          description: "",
          template: "Default",
        },
        (err) => console.log(err)
      );
      // update folder list after creating new folder
      fs.readdir(projectDir, (err, data) => {
        if (err) throw err;
        else {
          setFolderList(data);
          setFolderName("");
        }
      });
    }
  });
};
