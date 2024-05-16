function averageArray(arr) {
  let n = arr.length;
  let sum = 0;
  let average;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  average = sum/n;
      
  return average
}

let array_of_numbers = [1, 3, 9, 15, 90];
let avg = averageArray(array_of_numbers);

console.log("Average: ", avg);  //should return: Average: 23.6