//@ts-check
import React, { useState, useRef, useEffect } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromHTML,
  ContentState,
} from "draft-js";
import { Divider, Box } from "@material-ui/core";
import { InlineTools, BlockTools } from "./Toolbar";
import useStyles from "../useStyles";
import jsonfile from "jsonfile";
import { stateToHTML } from "draft-js-export-html";

// TODO: Enable editor focus after clicking toolbar
// TODO: Use Ctrl + S to save file.
/**
 * This would mean I need to prevent navigation when the user has not saved their work
 * Or perhaps, add it to settings where user may choose between autosave and
 * manual saving.
 */
//TODO: Add more to toolbars
/**
 * Indent: increase or decrease the indentation, in case of list, it would either
 * create a child list or bring it out to parent list or even remove the list
 * Image: image will be saved as imageData, so no physical files needed, also there
 * will be a way to change the image dimension, perhaps I will start by setting
 * a standard dimension at the beginning to prevent too big an image (ht < 300px)
 */
// TODO: Advanced tools
/**
 * This includes stuff like multiple selection and edition, like managing more than
 * one cursor like I do on VsCode using alt + click
 */
// TODO: Add shortcuts to all the toolbar
/**
 * --- Block
 * H1: Ctrl + 1
 * H2: Ctrl + 2
 * H3: Ctrl + 3
 * Quote: Ctrl + '
 * Ol: Ctrl + 0
 * Ul: Ctrl + *
 * --- Inline
 * Bold: Ctrl + B
 * Italic: Ctrl + I
 * Underline: Ctrl + U
 * Strikethrough: Ctrl + /
 */
/**
 * @param {{ itemDir: string; }} props
 */
export default (props) => {
  const { itemDir } = props;
  const classes = useStyles();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [data, setData] = useState({});
  const editorRef = useRef(null);
  /**
   * For turning focus to the editor
   */
  const focusEditor = () => editorRef.current.focus();
  useEffect(() => {
    jsonfile.readFile(itemDir).then((val, err) => {
      setData(val);
      const { content } = val;
      const blocksFromHTML = convertFromHTML(content);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );

      setEditorState(() => EditorState.createWithContent(state));
    });
  }, [itemDir]);

  /**
   * For updating the value of the editorState
   * @param {React.SetStateAction<EditorState>} editorState
   */
  const onChange = (editorState) => setEditorState(editorState);

  /**
   * Change changinng inline styles like BOLD, ITALIC
   * @param {string} style
   */
  const toggleInline = (style) =>
    onChange(RichUtils.toggleInlineStyle(editorState, style));

  /**
   * For block element like HEADERS and LIST
   * @param {string} type
   */
  const toggleBlock = (type) =>
    onChange(RichUtils.toggleBlockType(editorState, type));

  /**
   * For handling keys like Ctrl B= bold
   * @param {string} command
   * @param {EditorState} editorState
   */
  const handleKeyCommand = (command, editorState) => {
    /** @type {React.SetStateAction<EditorState>} */
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);

      return "handled";
    }
    return "not-handled";
  };

  const save = () => {
    const contentState = editorState.getCurrentContent();
    const raw = stateToHTML(contentState);
    jsonfile.readFile(itemDir, (err, data) => {
      if (err) console.log("error reading file:", err);
      else
        jsonfile.writeFile(
          itemDir,
          {
            ...data,
            content: raw,
          },
          (err) => {
            if (err) console.log("error saving data");
          }
        );
    });
  };

  // Remove placeholder after clicking toolbar
  let className = `${classes.editor}`;
  const contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== "unstyled")
      className += ` ${classes.hidePlaceholder}`;
  }

  return (
    <div>
      <Box className={classes.nav}>
        <Box alignItems="center" className={classes.toolbar}>
          <BlockTools toggleBlock={toggleBlock} editorState={editorState} />
          <Divider orientation="vertical" flexItem className={classes.white} />
          <InlineTools toggleBlock={toggleInline} editorState={editorState} />
        </Box>
      </Box>
      <div className={className}>
        <Editor
          ref={editorRef}
          editorState={editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          placeholder="Once upon a time..."
          spellCheck
          autoCapitalize="sentence"
          autoComplete="on"
          autoCorrect="on"
          onBlur={save}
        />
      </div>
    </div>
  );
};
