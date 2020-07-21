//@ts-check
import { select } from "../../utils/random";

export default () =>
  select([
    "Full lips",
    "Heavy upper lip",
    "Heavy lower lip",
    "Wide lips",
    "Round lips",
    "Thin lips",
    "Bow shaped lips",
    "Heart shaped lips",
    "Downward turned lips",
  ])[0];
