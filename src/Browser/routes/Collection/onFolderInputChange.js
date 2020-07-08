//@ts-check
import { title } from "string-007";

/**
 * This will listen to changes in input and respond appropriately. It may disable input and set error message
 * @param {string} value
 * @param {(arg0: string) => void} setFileName
 * @param {(arg0: string) => void} setError
 * @param {string[]} fileList
 */
export default (value, setFileName, setError, fileList) => {
  setFileName(value);
  if (!value.length) setError("");
  else if (value.length < 2) setError("Name is too short");
  else if (fileList.map(title).includes(title(value)))
    setError("Name already exist");
  else setError("");
};
