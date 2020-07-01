//@ts-check
import fs from "fs";

/**
 * This will send this message to db, like analytics. It will contain the following info
 * source: the file e.g. Help.js
 * location: the part of the file e.g. createFile() or jsonfile.readFile()
 * err: auto generated message by api or programming language
 * @param {{ source: string; location: string; err: Error; }} errorInfo
 */
const send = (errorInfo) => {
  const { source, location, err } = errorInfo;
  const date = new Date();
  const msg = `Source: ${source}\nLocation: ${location}\nMessage: ${err}\nDate & Time: \n${date.toDateString()} ${date.toTimeString()}--------------------------------------------------------------------\n`;
  fs.writeFile("error-log", msg, { flag: "a" }, (err) => {
    if (err) throw err;
    console.log("Error logged at", date.toTimeString());
  });
};

/**
 * This is meant to maintain the workflow of the app even when error occurs and at the same time inform the programmer on what is happening in the app.
 * @param {{ source: string; location: string; err: Error; }} errorInfo
 * @param {() => void} fn? - The callback like redirect, reset value
 */
export default (errorInfo, fn = null) => {
  send(errorInfo);
  if (fn) fn();
};
