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
// TODO: Add search and replace
/**
 * Basic editor search and replace.
 * Ctrl + F: it will open two inputs, two icons and a button. The first input will be the text that is being searched, the second inputs will serve as the replacer text. The two icons will be up and down, navigating to the next or previous matched text while the replace button will replace the matched text with the content of the second input. If the second input is empty, the button is disabled.
 * Also, there will be a badge indicating the number of matches.
 */
// TODO: Highlight keywords
/**
 * To be honest, I don't know how I will implement this feature but this is basically what it does.
 * Certain keywords will be automatically be highlighted whenever you typed them in, similar to the way IDE applies different styles to different keywords. User may use it to keep track e.g. the number of characters that are present in a chapter.
 * Implementation 1: At the project level, user can add keywords, I could have a simple inputs or an array of inputs, each one has its own label e.g. charaacters or locations etc. Now, any file inside this project will have the keyword highlighted, and in case of array of inputs, user can toggle which set of keywords that they want to see.
 * Auto indexing: whenever a user opens a project or create a new file, all the names of the file is indexed like some store.index or store.keywords and this will automatically serves as the keywords. I could provide array of keywords by separating them based on folders. The only problem with this is that file name may not be semantic enough e.g. the name of the file may not equal the name of the item e.g. the name of a character file is "Waiter", but the name of the waiter may be John Doe, he may have the nickname JD, his uncle may call him Johny Boy etc.
 * And perhaps, this feature is to far reaching?
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
