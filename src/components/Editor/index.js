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

  /**
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
