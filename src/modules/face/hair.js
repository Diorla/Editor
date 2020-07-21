//@ts-check
import { selectWithOdds } from "../../utils/random";

export default () => {
  const bearded = selectWithOdds(
    [
      "",
      "Stubbly bearded",
      "Full bearded",
      "Short bearded",
      "Eccentric bearded",
    ],
    [68.6, 13.6, 13.6, 2.1, 2.1]
  );
  const moustached = selectWithOdds(["", "Moustached"], [72.8, 27.2]);
  let hair = "";
  if (moustached && bearded) hair += `${moustached} and ${bearded}`;
  else if (moustached) return moustached;
  else return bearded;
};
