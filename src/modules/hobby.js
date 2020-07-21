//@ts-check
import { select, range } from "../utils/random";
import { title } from "string-007";
import sentence from "../utils/sentence";

/**
 * @param {"indoor"|"outdoor"} type? - provide this to specify the type of activity
 * @param {number} length?
 */
export default (type, length) => {
  const numbers = length ? length : range(3, 7, true);
  let arr = [];
  if (type) arr = select(hobbies[type], numbers);
  else {
    const { indoor, outdoor } = hobbies;
    arr = select([...indoor, ...outdoor], numbers);
  }
  return title(sentence(arr));
};

export const hobbies = {
  indoor: [
    "Badminton",
    "Baking",
    "Bird watching",
    "Board games",
    "Collecting seashells",
    "Computer programming",
    "Cooking",
    "Drawing",
    "Electronics",
    "Embroidery",
    "Gaming",
    "Jewellery making",
    "Knitting",
    "Learning foreign language",
    "Lego building",
    "Listening to music",
    "Mahjong",
    "Marbles",
    "Meteorology",
    "Origami",
    "Painting",
    "Photography",
    "Reading",
    "Scrapbooking",
    "Sewing",
    "Solving puzzles",
    "Table Football",
    "Watching TV",
    "Writing",
  ],
  outdoor: [
    "Acting",
    "American football",
    "Archery",
    "Baseball",
    "Basketball",
    "Billiards",
    "Bowling",
    "Clubbing",
    "Couponing",
    "Crocheting",
    "Cycling",
    "Dancing",
    "Darts",
    "Flying kites",
    "Football",
    "Gardening",
    "Golf",
    "Gymnastics",
    "Hiking",
    "Hockey",
    "Hurdles",
    "Ice skating",
    "Improv",
    "Miniature golf",
    "Netball",
    "Poker",
    "Pottery",
    "Racquetball",
    "Rollerskating",
    "Rugby",
    "Seashell collecting",
    "Shopping",
    "Skateboarding",
    "Skating",
    "Skiing",
    "Swimming",
    "Table tennis",
    "Taekwando",
    "Taking a stroll",
    "Tennis",
    "Volleyball",
  ],
};