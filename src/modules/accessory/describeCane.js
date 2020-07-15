//@ts-check
import { selectWithOdds, select } from "../../utils/random";

// Information gleaned from https://avacaremedical.com/walking-canes-guide
export default () => {
  const structure = selectWithOdds(
    [
      "Straight wooden cane",
      "Straight metallic cane",
      "Straight collapsible cane",
      "Tripod cane",
      "Quad cane",
      "Seat cane",
    ],
    [25, 25, 9, 4, 16, 1]
  )[0];
  const handleShape = select([
    "Crooked handle",
    "T-handle",
    "Fritz handle",
    "Offset handle",
  ])[0];
  const gripType = select([
    "Foam grip",
    "Gel grip",
    "Large grip",
    "Orthopedic grip",
  ])[0];
  const bottomTip = selectWithOdds(["Rubber tip", "Quad tips"], [10, 1])[0];
  return `${structure} with ${handleShape}, ${gripType} and ${bottomTip}`;
};
