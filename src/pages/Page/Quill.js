//@ts-check
import React from "react";
import ReactQuill from "react-quill";
import useStyles from "./useStyles";
//TODO: Use quill more generally.
/**
 * I will replace all the multiple inputs with a single <Quill /> component
 * Then, I will replace labels it with appropriate headers e.g. 
 * <h1>Basic information</h1>
 * <h2>Place of birth</h2>
 * 
 * I will replace placeholder/help with something like <pre>This is help about...</pre>
 * This will prevent/reduce loops because users will be replace each item in an 
 * array with headers or lists, This will greatly improve the speed, and also, it 
 * also provides rich text!
 * 
 * Note, I won't change timeline because the ui is more appropriate. 
 * 
 * Also, I may still break a document down into 2 or more editors to make things easier
 * e.g. characters will still be broken into Basic, Physical, Habits etc. 
 * 
 * And I will still retain some inputs like name?
 */
/**
 * @param {{ content: string; onChange: (arg0: string)=> any; }} props
 */
const Quill = (props) => {
  const { content, onChange } = props;
  const classes = useStyles();
  const modules = {
    toolbar: [
      [{ header: [2, 3, false] }],
      ["bold", "italic", "underline", "blockquote", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <ReactQuill
      className={classes.quill}
      modules={modules}
      formats={formats}
      value={content}
      onChange={onChange}
      placeholder="Once upon a time"
    />
  );
};

export default Quill;
