//@ts-check
import { selectWithOdds, select } from "../../utils/random";
import sentence from "../../utils/sentence";

export default () => {
  const size = selectWithOdds(["Small", "", "Big"], [14, 72, 14])[0];
  const shape = select([
    "Hooked nose",
    "Droopy nose",
    "Aquiline nose",
    "Roman nose",
    "Grecian nose",
    "Button nose",
    "Upturned nose",
    "Snub nose",
    "Funnel nose",
    "Nubian nose",
  ])[0];
  return sentence([size, shape]);
};
