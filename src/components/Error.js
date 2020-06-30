//@ts-check
import fs from "fs";

/**
 * This will send this message to db, like analytics. It will contain the following info
 * source: the file e.g. Help.js
 * location: the part of the file e.g. createFile() or jsonfile.readFile()
 * err: auto generated message by api or programming language
 * @param {{ source: string; location: string; err: string; }} errorInfo
 */
const send = (errorInfo) => {
  const { source, location, err } = errorInfo;
  const msg = `Source: ${source}\nLocation: ${location}\nMessage: ${err}\n--------------------------------------------------------------------\n`;
  fs.writeFile("error-log", msg, { flag: "a" }, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
};

/**
 * This is meant to maintain the workflow of the app even when error occurs and at the same time
 * inform the programmer on what is happening in the app.
 * @param {{ source: string; location: string; err: string; }} err
 * @param {() => void} fn - The callback like redirect, reset value
 */
export default (err, fn) => {
  send(err);
  fn();
};
