//@ts-check
import { RichUtils } from "draft-js";
const blockType = [
  "header-one",
  "header-two",
  "header-three",
  "blockquote",
  "unordered-list-item",
  "ordered-list-item",
];
const inlineType = ["STRIKETHROUGH", "CODE"];
/**
 * For handling keys like Ctrl B= bold
 * @param {string} command
 * @param {import("draft-js").EditorState} editorState
 * @param {(arg0: import("react").SetStateAction<import("draft-js").EditorState>) => void} onChange
 */
export default (command, editorState, onChange) => {
  if (inlineType.includes(command)) {
    onChange(RichUtils.toggleInlineStyle(editorState, command));

    return "handled";
  } else if (blockType.includes(command)) {
    onChange(RichUtils.toggleBlockType(editorState, command));

    return "handled";
  } else {
    /** @type {React.SetStateAction<import("draft-js").EditorState>} */
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);

      return "handled";
    }
  }
  return "not-handled";
};
