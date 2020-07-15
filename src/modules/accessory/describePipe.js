//@ts-check
import { select } from "../../utils/random";

//https://www.wikipedia.org/wiki/Tobacco_pipe
export default () => {
  return select([
    "Briar wood pipe",
    "Meerschaum pipe",
    "Corncob pipe",
    "Pear-wood pipe",
    "Rose-wood pipe",
    "Clay pipe",
  ])[0];
};
