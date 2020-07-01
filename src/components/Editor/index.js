//@ts-check
import React, { useState, useRef, useEffect } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { Divider, Box } from "@material-ui/core";
import { InlineTools, BlockTools } from "./Toolbar";
import useStyles from "../useStyles";
import save from "./save";
import handleKeyCommand from "./handleKeyCommand";
import load from "./load";
import KeybindingFn from "./KeybindingFn";

// TODO: Enable editor focus after clicking toolbar
// TODO: Add more to toolbars
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
/**
 * @param {{ itemDir: string; }} props
 */
export default (props) => {
  const { itemDir } = props;
  const classes = useStyles();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const editorRef = useRef(null);
  // BUG: Editor cursor is erratic
  /**
   * Whenever I call the function inside useEffect(which should enable autofocus on page load)
   * It works at first, and then cursor starts jumping around on the editor
   * For turning focus to the editor
   */
  // const focusEditor = () => editorRef.current.focus();
  useEffect(() => {
    load(itemDir, setEditorState);
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

  // Remove placeholder after clicking toolbar
  let className = `${classes.editor}`;
  const contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== "unstyled")
      className += ` ${classes.hidePlaceholder}`;
  }

  //FIXME: onTab is deprecated
  /**
   * So I need to fix it, by replacing it with KeybindingFn
   * @param {React.KeyboardEvent<{}>} e
   */
  const onTab = (e) => onChange(RichUtils.onTab(e, editorState, 4));

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
          handleKeyCommand={(command) =>
            handleKeyCommand(command, editorState, onChange)
          }
          placeholder="Once upon a time..."
          spellCheck
          autoCapitalize="sentence"
          autoComplete="on"
          autoCorrect="on"
          onBlur={() => save(editorState, itemDir)}
          onTab={onTab}
          keyBindingFn={(e) => KeybindingFn(e)}
        />
      </div>
    </div>
  );
};
