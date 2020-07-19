//@ts-check
import { select, range } from "../utils/random";
import { title } from "string-007";
import sentence from "../utils/sentence";

/**
 * @param {"light"|"moderate"|"intense"} type? - provide this to specify the type of activity
 * @param {number} length?
 */
export default (type, length) => {
  const numbers = length ? length : range(3, 7, true);
  let arr = [];
  if (type) arr = select(activities[type], numbers);
  else {
    const { light, moderate, intense } = activities;
    arr = select([...light, ...moderate, ...intense], numbers);
  }
  return title(sentence(arr));
};

export const activities = {
  // Requires little or no physical exertion, can do sitting or lying down
  light: [
    "Arts & Crafts",
    "Cinema",
    "Doing magic",
    "Eating out at a restaurant",
    "Going to art galleries & expo",
    "Going to movies",
    "Going to museums",
    "Going to parks",
    "Meditation",
    "Picnic",
    "Playing a musical instrument",
    "Stargazing",
  ],
  // Requirees little physical activity
  moderate: [
    "Antiquing",
    "Attending sport events (e.g. world cup or olympic)",
    "Barbecuing",
    "Bird watching",
    "Boating",
    "Candle making",
    "Car restoration",
    "Card collecting",
    "Cleaning",
    "Debating",
    "Fishing",
    "Geocaching",
    "Going to concerts",
    "Going on cruises",
    "Going to festivals",
    "Juggling",
    "Picking flowers",
    "Riding bumper car",
    "Riding hot air balloon",
    "Road trip",
    "Yoga",
  ],
  // Vigorous activity
  intense: [
    "Backpacking",
    "Bungee jumping",
    "Camping",
    "Do it yourself",
    "Helicopter ride",
    "Ice fishing",
    "Kart racing",
    "Kayaking",
    "Laser tag",
    "Marathon",
    "Mountain climbing",
    "Paintballing",
    "Paragliding",
    "Parasailing",
    "Partying",
    "Rafting",
    "Rollercasting ride",
    "Safari",
    "Sailing",
    "Scuba diving",
    "Sky diving",
    "Sledding",
    "Snowboarding",
    "Squash",
    "Surfing",
    "Travelling",
    "Tubing",
    "Zip lining",
  ],
};
