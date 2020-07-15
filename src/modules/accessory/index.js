//@ts-check
import { geometric, range } from "../../utils/random";
import { title } from "string-007";
import sentence from "../../utils/sentence";
import describeGlass from "./describeGlass";
import describeWatch from "./describeWatch";
import describeBraces from "./describeBraces";
import describePipe from "./describePipe";
import describeCane from "./describeCane";

/**
 * These are accessories that the user may choose to wear and not usually mandated and doesn't make any fashion statement e.g. wearing necklaces or blings or any gender specific wearables.
 * @param {number} age? - It's used to determine the odds for each accessories. 1 to 12: child, 13 to 19: teenager, 20 to 65: adult and anything above is a senior. If it's not provided, a default odd is used
 */
export default (age = 0) => {
  let accessoryList = [];
  const numbers = Math.round(range(0, 3));
  if (!age) {
    if (numbers) accessoryList = geometric(accessories.main, numbers, 10);
  } else if (age <= 12) {
    if (numbers) accessoryList = geometric(accessories.child, numbers, 10);
  } else if (age <= 19) {
    if (numbers) accessoryList = geometric(accessories.teenager, numbers, 10);
  } else if (age <= 65) {
    if (numbers) accessoryList = geometric(accessories.adult, numbers, 10);
  } else {
    if (numbers) accessoryList = geometric(accessories.senior, numbers, 10);
  }
  return numbers ? describe(accessoryList, age) : "None";
};

const accessories = {
  main: [
    "Pipe", //6654=21
    "Cane", //5543=17
    "Locekt", //4434=15
    "Braces", //1346=14
    "Glasses", // 2221=7
    "Wristwatch", //3112=7
  ],
  child: ["Pipe", "Cane", "Locket", "Wristwatch", "Glasses", "Braces"], //2 to 12
  teenager: ["Pipe", "Cane", "Locket", "Braces", "Glasses", "Wristwatch"], //13 to 19
  adult: ["Pipe", "Braces", "Cane", "Locket", "Glasses", "Wristwatch"], // 20 to 65
  senior: ["Braces", "Pipe", "Locket", "Cane", "Wristwatch", "Glasses"], // 66 to 120
};

/**
 * @param {any[]} accessories
 * @param {number} age
 */
const describe = (accessories, age) => {
  let description = [];
  /**
   * @param {string} item
   */
  accessories.map((item) => {
    if (item === "Glasses") description.push(describeGlass());
    else if (item === "Wristwatch") description.push(describeWatch(age));
    else if (item === "Braces") description.push(describeBraces());
    else if (item === "Pipe") description.push(describePipe());
    else if (item === "Cane") description.push(describeCane());
    else description.push(item);
  });
  return title(sentence(description));
};
