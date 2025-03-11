const getMean = (array) => {
  return array.reduce((acc, el) => acc + el, 0) / array.length;
};
const calculate = () => {
  const values = document.querySelector("#numbers").value;

  const array = values.plit(/,\s*/g);
  const numbers = array
    .map((el) => Number(el))
    .filter((value) => !isNaN(value));

  const mean = getMean(numbers);

  document.querySelector("#mean").textContent = mean;
};
