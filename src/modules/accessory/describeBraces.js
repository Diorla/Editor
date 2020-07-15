//@ts-check
import { selectWithOdds } from "../../utils/random";

// https://www.wikipedia.org/wiki/Dental_braces
export default () => {
  return selectWithOdds(
    [
      "Traditional metal wired braces",
      "Gold-plated stainless steel",
      "Lingual braces",
      "Titanium braces",
      "Clear aligners braces",
    ],
    [10, 1, 1, 2, 3]
  )[0];
};
