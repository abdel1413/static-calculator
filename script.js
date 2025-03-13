const getRange = (array) => {};
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
    counts[el] = (countent[el] || 0) + 1;
  });
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }

  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];

  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );
  return mode.join(",");
};

const calculate = () => {
  const values = document.querySelector("#numbers").value;

  const array = values.split(/,\s*/g);

  const numbers = array.map((el) => Number(el)).filter((val) => !isNaN(val));

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);

  // console.log(mode);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;

  //document.querySelector("#numbers").value = "";
};
