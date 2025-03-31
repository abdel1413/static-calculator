const getMean = (array) => {
  return array.reduce((acc, el) => acc + el, 0) / array.length;
};

// 1: sort the array from least to greates
//2: check if the length of sorted array is even
// if even
//a) find the first middle (array[length / 2])
//b) find the second middle (array[lengh/2 -1])
//c) get the mean of both first and second middle
//if not even:
// just find the middle using array[Math.floor(length/2)]
const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
  const firstMiddle = sorted[sorted.length / 2];
  const secondMiddle = sorted[sorted.length / 2 - 1];
  const median =
    sorted.length % 2 === 0
      ? getMean([firstMiddle, secondMiddle])
      : sorted[Math.floor(sorted.length / 2)];
  return median;
};

// loop thru the array and check which number appears
// most often and return it

const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    // counts[el] = (countent[el] || 0) + 1;
    counts[el] = counts[el] ? counts[el] + 1 : 1;
  });
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }

  console.log(counts);
  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
  console.log("hi", highest);
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );

  return mode.join(",");
};

const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
};

//variance is the average of the
//sum of square of difference distances (difference is el -mean)
// 1 find the mean;
//2 get the distance from mean to each element (el -mean)
//  3 square the values gotten from the distance
// 4 sum up all the squares
//5 divide by the length of square values
const getVariance = (array) => {
  const mean = getMean(array);
  const distances = array.map((el) => el - mean);
  const squareDistances = distances.map((el) => el ** 2);
  const sumSquaredDistances =
    squareDistances.reduce((acc, el) => acc + el, 0) / squareDistances.length;
  //return sumSquaredDistances;

  //more efficient way
  // used reduce methd and calculate distance and square
  //each el then return accumilator + sqauredvalues
  const variance =
    array.reduce((acc, el) => {
      const distance = el - mean;
      const squared = distance ** 2;
      return acc + squared;
    }, 0) / array.length;

  return variance;
};

// standard deviation is square root of variance
const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);
  //   return standardDeviation;
  //return Math.sqrt(variance);
  return Math.sqrt(getVariance(array));
};

const calculate = () => {
  const values = document.querySelector("#numbers").value;

  const array = values.split(/,\s*/g);

  const numbers = array.map((el) => Number(el)).filter((val) => !isNaN(val));

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
  document.querySelector("#variance").textContent = variance;
  document.querySelector("#standardDeviation").textContent = standardDeviation;

  document.querySelector("#numbers").value = "";
};

/**
 * SPREADSHEET
 * window has an onload property which allows 
 * you to define behavior when the window has loaded the entire page, including stylesheets and scripts.

Spreadsheet software typically uses = at the 
beginning of a cell to indicate a calculation 
should be used, and spreadsheet functions should be
 evaluated.


 closure
  const addCharacters = character1 => character2 => num => charRange(character1, character2)
  
  immediately invoke the innermost function 
  addCharacters(char1)(char2));




/(\d)([*|/])(\d)/ = patterm of number followed by 
 * or / operator followed by another number
*/
