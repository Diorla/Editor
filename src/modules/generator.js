//@ts-check

import oddCalculator from "./oddCalculator";


/**
 * @param {number} start
 * @param {number} [end]
 */
const range = (start, end) => {
  const diff = end - start;
  return start + Math.round(Math.random() * diff);
};

/**
 *
 * @param {Object} obj
 * @param {Object} generator
 */
const generator = (obj, generator) => {
  // copy obj
  const tempObj = { ...obj };
  Object.keys(generator).map((key) => {
    // each item in generator
    const generatorObject = generator[key];
    // get the filter in the item
    const generatorFilter = generatorObject.filter;
    if (generatorFilter) {
      // Fetch the data
      let generatorData = generator[key]["data"];
      try {
        for (let filter of generatorFilter) {
          // Get the value for the filter
          const tempObjValue = tempObj[filter];
          // Go down the rabbit hole until you return an array
          generatorData = generatorData[tempObjValue];
        }
        if (generatorObject.isRange) {
          tempObj[key] =
            tempObj[key] || range(generatorData[0], generatorData[1]);
        } else {
          tempObj[key] =
            tempObj[key] ||
            oddCalculator(generatorData, generatorObject.odds);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      if (generatorObject.isRange) {
        const generatorData = generatorObject.data;
        tempObj[key] =
          tempObj[key] || range(generatorData[0], generatorData[1]);
      } else {
        tempObj[key] =
          tempObj[key] ||
          oddCalculator(generatorObject.data, generatorObject.odds);
      }
    }
  });
  // console.log(tempObj);
  return tempObj;
};

export default generator;
