//@ts-check
import React from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaQuoteRight,
  FaListUl,
  FaListOl,
  FaStrikethrough,
} from "react-icons/fa";
import useStyles from "../useStyles";

const blockButtons = [
  {
    label: "H1",
    style: "header-one",
    description: "Heading 1",
  },
  {
    label: "H2",
    style: "header-two",
    description: "Heading 2",
  },
  {
    label: "H3",
    style: "header-three",
    description: "Heading 3",
  },
  {
    label: <FaQuoteRight />,
    style: "blockquote",
    description: "Blockquote",
  },
  {
    label: <FaListUl />,
    style: "unordered-list-item",
    description: "Unordered list",
  },
  {
    label: <FaListOl />,
    style: "ordered-list-item",
    description: "Ordered list",
  },
];

const inlineButtons = [
  {
    label: <FaBold />,
    style: "BOLD",
    description: "Bold: Ctrl + B",
  },
  {
    label: <FaItalic />,
    style: "ITALIC",
    description: "Italic: Ctrl + I",
  },
  {
    label: <FaUnderline />,
    style: "UNDERLINE",
    description: "Underline: Ctrl + U",
  },
  {
    label: <FaStrikethrough />,
    style: "STRIKETHROUGH",
    description: "strikethrough",
  },
];

/**
 * @param {{ item: {style: string, description: string, label: any}; active: boolean; toggleBlock: (arg0: string)=>void; }} props
 */
const ToolbarItem = (props) => {
  const classes = useStyles();
  const { item, toggleBlock, active } = props;
  if (active)
    return (
      <span
        className={classes.activeToolbarIcon}
        title={item.description}
        onClick={() => toggleBlock(item.style)}
      >
        {item.label}
      </span>
    );
  else
    return (
      <span
        className={classes.toolbarIcon}
        title={item.description}
        onClick={() => toggleBlock(item.style)}
      >
        {item.label}
      </span>
    );
};

/**
 * @param {{ toggleBlock: any; editorState: any;  }} props
 */
export const BlockTools = (props) => {
  const { toggleBlock, editorState } = props;
  const select  = editorState.getSelection();
  const blockStyle = editorState
    .getCurrentContent()
    .getBlockForKey(select.getStartKey())
    .getType();
  return (
    <>
      {blockButtons.map((item, idx) => (
        <ToolbarItem
          item={item}
          toggleBlock={toggleBlock}
          active={item.style === blockStyle}
          key={idx}
        />
      ))}
    </>
  );
};

/**
 * @param {{ toggleBlock: any; editorState: any; }} props
 */
export const InlineTools = (props) => {
  const { toggleBlock, editorState } = props;
  const inlineStyle = editorState.getCurrentInlineStyle();
  return (
    <>
      {inlineButtons.map((item, idx) => (
        <ToolbarItem
          item={item}
          toggleBlock={toggleBlock}
          active={inlineStyle.has(item.style)}
          key={idx}
        />
      ))}
    </>
  );
};