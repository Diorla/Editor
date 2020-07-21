//@ts-check

import { select, selectWithOdds } from "../../utils/random";

//www.discountglasses.com/glasses-guide/eyeglasses
export default () => {
  //full frame, semi-rimless frame, rimless frame
  //shape: Aviator, Browline, Cat eye, oval, rectangle, round, square, wrap shape
  //hinge: standard/barrel hinges, spring hinges, no hinges(for kids)
  //material: plastic, metal(Au, Ag, Al, Be, steel, titanium, monel, nickel titanium), natural(wood, bone, leather, semi-precious/precious stone)
  const frame = select(["Framed", "Semi", "rimless"])[0];
  const shape = select([
    "Aviator",
    "Browline",
    "Cat eye",
    "Oval",
    "Rectangular",
    "Round",
    "Square",
    "Wrap shaped",
  ])[0];
  let material = selectWithOdds(
    [
      "Plastic", // Plastic is more popular than metals
      "Gold",
      "Aluminium",
      "Berylium",
      "Steel",
      "Titanium",
      "Monel",
      "Nickel titanium",
    ],
    [13, 1, 1, 1, 1, 1, 1, 1] //13:7
  )[0];
  if (frame === "rimless") return `${shape} glasses`;
  else if (frame === "Semi-rimless frame")
    return `${material}, half rimmed ${shape} glasses`;
  else return `${shape} glasses with ${material} frame`;
};
