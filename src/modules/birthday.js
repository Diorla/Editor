//@ts-check
import Chance from "chance";
export default () => {
  // @ts-ignore
  const hammertime = new Chance().hammertime();
  const date = new Date(hammertime);
  return {
    year: date.getFullYear(),
    month: months[date.getMonth()],
    date: date.getDate(),
    hour: date.getHours(),
    minutes: date.getMinutes(),
    seconds: Math.floor(date.getMilliseconds() / 1000),
  };
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
