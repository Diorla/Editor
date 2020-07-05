//@ts-check
import fs from "fs";
import callsites from "callsites";

/**
 * Save the error details to error-log
 * @param {{ err: string; date: string; time: string; fnName: string; file: string; line: number; column: number; }} errorInfo
 */
const writeToFile = (errorInfo) => {
  const { err, date, time, fnName, file, line, column } = errorInfo;
  const hr = "----------------------------------------------------\n";
  const msg = `Err: ${err}\nSource: ${file}\nFunction name: ${fnName}\nLine: ${line}\nColumn: ${column}\nDate: ${date}\nTime: ${time}\n${hr}`;
  fs.writeFile("error-log", msg, { flag: "a" }, (err) => {
    if (err) throw err;
    console.log("Error logged at", time);
  });
};

/**
 * Keep logs of the errors
 * @param {Error} err
 */
export default (err) => {
  const clst = callsites();
  for (let c of clst) {
    // To ensure that the function will be called from "./scripts" folder and
    // it's not ErrorLog.js
    if (
      c.getFileName().includes("scripts") &&
      !c.getFileName().includes("ErrorLog")
    ) {
      const date = new Date();
      const errorInfo = {
        err: err.message,
        date: date.toDateString(),
        time: date.toTimeString(),
        fnName: c.getFunctionName(),
        file: c.getFileName(),
        line: c.getLineNumber(),
        column: c.getColumnNumber(),
      };
      console.log({ ...errorInfo });
      writeToFile(errorInfo);
      break;
    }
  }
};
