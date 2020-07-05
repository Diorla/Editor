//@ts-check
import fs from "fs";
import jsonfile from "jsonfile";
import generateHash from "../../../utils/generateHash";

/**
 * @param {any} folderName
 * @param {fs.PathLike} projectDir
 * @param {(arg0: string[]) => void} setFileList
 * @param {(arg0: string) => void} setFolderName
 */
export default (folderName, projectDir, setFileList, setFolderName) => {
  console.log("new folder:", `${projectDir}/${folderName}`);
  fs.mkdir(`${projectDir}/${folderName}`, { recursive: true }, (err) => {
    console.log("new dir created");
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
      fs.readdir(projectDir, (err, files) => {
        console.log("read list", files);
        if (err) console.log(err);
        else setFileList(files);
        // reset input
        setFolderName("");
      });
    }
  });
};
