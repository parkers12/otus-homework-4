export function getArrSum(arr) {
  console.log(arr.reduce((a, b) => a + b));
}

export function getNewArr(arr) {
  let newArr = [];
  newArr = arr.map((el) => el * 2);
  console.log(newArr);
}

export function getArrMinMax(arr) {
  arr.sort((a, b) => a - b);
  const [min, , , , , , , , , max] = arr;
  console.log(min, max);
}
