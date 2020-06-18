//@ts-check
import title from "../../utils/title";

/**
 * This will listen to changes in input and respond appropriately.
 * It may disable buttons and set error message
 * @param {{ target: { value: string ; }; }} event
 * @param {(arg0: string) => void} setFileName
 * @param {(arg0: string) => void} setError
 * @param {string[]} fileList
 */
export default (event, setFileName, setError, fileList) => {
  setFileName(event.target.value);
  if (!event.target.value.length) setError("");
  else if (event.target.value.length < 2) setError("Name is too short");
  else if (fileList.map(title).includes(title(event.target.value + ".scrb")))
    setError("Name already exist");
  else setError("");
};
