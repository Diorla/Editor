//@ts-check
import { selectWithOdds, select } from "../../utils/random";
import sentence from "../../utils/sentence";

export default () => {
  const size = selectWithOdds(["Small", "", "Big"], [14, 72, 14])[0];
  const shape = select([
    "Square ears",
    "Pointy ears",
    "Narrow ears",
    "Ears sticking out",
    "Round ears",
    "Round attached ears",
    "Round ears with broad lobe",
  ])[0];
  return sentence([size, shape]);
};
