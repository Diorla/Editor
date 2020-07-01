//@ts-check

import jsonfile from "jsonfile";
import ErrorLog from "../ErrorLog";
import { convertFromHTML, ContentState, EditorState } from "draft-js";
/**
 * It will load the file and get the file.content
 * @param {jsonfile.Path} itemDir
 * @param {(arg0: () => EditorState) => void} setEditorState
 */
export default (itemDir, setEditorState) => {
  jsonfile.readFile(itemDir).then((val, err) => {
    if (err) {
      ErrorLog({ source: "Editor", location: "load.js", err });
    } else {
      const { content } = val;
      const blocksFromHTML = convertFromHTML(content);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );

      setEditorState(() => EditorState.createWithContent(state));
    }
  });
};
