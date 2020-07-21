//@ts-check
import { selectWithOdds } from "../utils/random";
import sentence from "../utils/sentence";

// grin, beam, smirk, leer, sneer , laugh, chortle, chuckle
export default () => {
  const smile = selectWithOdds(smiles, [4, 25, 49, 9, 36, 16, 1])[0];
  const laughter = selectWithOdds(laughters, [9, 4, 25, 16, 36, 1])[0];
  return sentence([smile, laughter]);
};
const smiles = [
  "Goofy smile",
  "Beautiful smile",
  "",
  "Crooked smile",
  "Subtle smile",
  "Toothy smile",
  "Gap-toothed smile",
];

const laughters = [
  "Snorty laughter",
  "High pitched laughter",
  "Soft laughter",
  "Loud laughter",
  "",
  "Raspy laughter",
];
