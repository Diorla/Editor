import Chance from "chance";
//@ts-check

/**
 * @param {"ocean"|"desert"|"grassland"|"forest"|"farm"|"pet"|"zoo"} type? - Optionally specify a group of animals
 */
export default (type) => {
  const chance = new Chance();
  if (type) return chance.animal({ type });
  else return chance.animal();
};
