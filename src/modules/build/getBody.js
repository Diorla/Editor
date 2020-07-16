//@ts-check
import sentence from "../../utils/sentence";
import { title } from "string-007";

/**
 * Translates sizes to English equivalent e.g xl=obese or tall
 * @param {"xxl"|"xl"|"l"|"m"|"s"|"xs"|"xxs"} height - default is "m"
 * @param {"xl"|"l"|"m"|"xs"} weight - default is "m"
 */
export default (height = "m", weight = "m") => {
  const wt = {
    xs: "underweight",
    m: "",
    l: "overweight",
    xl: "obese",
  };
  const ht = {
    xxl: "very tall",
    xl: "tall",
    l: "slightly tall",
    m: "average height",
    s: "slightly short",
    xs: "short",
    xxs: "very short",
  };
  return title(sentence([ht[height], wt[weight]].filter((item) => !!item)));
};
