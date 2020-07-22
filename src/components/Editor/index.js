//@ts-check
import React, { useState, useRef, useEffect } from "react";
import { Editor, EditorState, RichUtils, CompositeDecorator } from "draft-js";
import { Divider, Box } from "@material-ui/core";
import { InlineTools, BlockTools } from "./Toolbar";
import useStyles from "../useStyles";
import save from "./save";
import handleKeyCommand from "./handleKeyCommand";
import load from "./load";
import KeybindingFn from "./KeybindingFn";

/**
 * @param {{ itemDir: string; readonly?: boolean}} props
 */
export default (props) => {
  const { itemDir, readonly } = props;
  const classes = useStyles();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const editorRef = useRef(null);

  const focusEditor = () => editorRef.current.focus();
  useEffect(() => {
    focusEditor();
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
  // Fix
  const [search, setSearch] = useState("");

  // Search

  /**
   * @param {RegExp} regex
   * @param {any} contentBlock
   * @param {{ (start: number, end: number): void; (arg0: any, arg1: any): void; }} callback
   */
  const findWithRegex = (regex, contentBlock, callback) => {
    const text = contentBlock.getText();
    let matchArr, start, end;
    while ((matchArr = regex.exec(text)) !== null) {
      start = matchArr.index;
      end = start + matchArr[0].length;
      callback(start, end);
    }
  };

  /**
   * @param {{ children: React.ReactNode; }} props
   */
  const SearchHighlight = (props) => (
    <span style={{ background: "yellow" }}>{props.children}</span>
  );

  /**
   * @param {string | RegExp} highlightTerm
   */
  const generateDecorator = (highlightTerm) => {
    const regex = new RegExp(highlightTerm, "g");
    return new CompositeDecorator([
      {
        strategy: (contentBlock, callback) => {
          if (highlightTerm !== "") {
            findWithRegex(regex, contentBlock, callback);
          }
        },
        component: SearchHighlight,
      },
    ]);
  };

  /**
   * @param {{ target: { value: any; }; }} e
   */
  const onChangeSearch = (e) => {
    const search = e.target.value;
    setSearch(search);
    setEditorState(
      EditorState.set(editorState, {
        decorator: generateDecorator(search),
      })
    );
  };

  return (
    <div>
      {readonly ? null : (
        <Box className={classes.nav}>
          <Box alignItems="center" className={classes.toolbar}>
            <BlockTools toggleBlock={toggleBlock} editorState={editorState} />
            <Divider
              orientation="vertical"
              flexItem
              className={classes.white}
            />
            <InlineTools toggleBlock={toggleInline} editorState={editorState} />
            <input
              value={search}
              onChange={onChangeSearch}
              placeholder="Search..."
              className={classes.search}
            />
          </Box>
        </Box>
      )}
      <div className={className} onClick={focusEditor}>
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
          readOnly={readonly}
        />
      </div>
    </div>
  );
};
