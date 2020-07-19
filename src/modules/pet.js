//@ts-check
import { selectWithOdds } from "../utils/random";
import sentence from "../utils/sentence";
import { title } from "string-007";

/**
 * @param {number} count - The number of pets to be returned
 */
export default (count = 1) => {
  return title(
    sentence(
      selectWithOdds(
        pets.map((item) => item[0]),
        pets.map((item) => Number(item[1])),
        count
      )
    )
  );
};
/**
 * I will group them into 3
 * Favourite-64: Loved by almost everyone
 * Common-27: Widely adopted
 * Acceptable-8: Not widely adopted
 * Rare-1: Usually exotic or weird
 */
//list of pet animals comes from https://www.dogbreedinfo.com/pets/pet.htm
export const pets = [
  ["Bearded Dragon", 8],
  ["Bird", 8],
  ["Burro", 1],
  ["Cat", 64],
  ["Chameleon", 1],
  ["Chicken", 1],
  ["Chinchilla", 8],
  ["Chinese Water Dragon", 1],
  ["Cow", 1],
  ["Dog", 64],
  ["Donkey", 8],
  ["Duck", 8],
  ["Ferret", 1],
  ["Fish", 9],
  ["Gecko", 8],
  ["Geese", 8],
  ["Gerbil", 8],
  ["Goat", 8],
  ["Guinea Fowl", 1],
  ["Guinea Pig", 8],
  ["Hamster", 9],
  ["Hedgehog", 9],
  ["Horse", 9],
  ["Iguana", 8],
  ["Llama", 8],
  ["Lizard", 8],
  ["Mice", 9],
  ["Mule", 8],
  ["Peafowl", 8],
  ["Pigeon", 9],
  ["Pony", 8],
  ["Pot Bellied Pig", 1],
  ["Rabbit", 9],
  ["Rat", 8],
  ["Sheep", 8],
  ["Skink", 1],
  ["Snake", 1],
  ["Stick Insect", 1],
  ["Sugar Glider", 8],
  ["Tarantula", 1],
  ["Turkey", 1],
  ["Turtle", 8],
];
