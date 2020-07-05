//@ts-check
import { convertToRaw } from "draft-js";
import jsonfile from "jsonfile";
import draftToHtml from "draftjs-to-html";
import ErrorLog from "../ErrorLog";

/**
 * This function saves the editor.contentState into "content" part of the appropriate .scrb files in html format. It will first load the file to ensure it's not overidding any other part of the code other than "file.content" especially if the file was also modified from external source or other part of the file since it was loaded.
 * @param {{ getCurrentContent: () => any; }} editorState
 * @param {jsonfile.Path} itemDir
 */
export default (editorState, itemDir) => {
  const contentState = editorState.getCurrentContent();
  const raw = convertToRaw(contentState);
  const html = draftToHtml(raw);
  //Load the current file before updating it
  jsonfile.readFile(itemDir, (err, data) => {
    if (err) ErrorLog(err);
    else
      jsonfile.writeFile(
        itemDir,
        {
          ...data,
          // Only modify the data.content
          content: html,
        },
        (err) => {
          if (err) console.log("error saving data");
        }
      );
  });
};
