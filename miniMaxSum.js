/*
1) Hackerranck - Mini-Max Sum 

Given five positive integers, find the minimum and maximum values that can be calculated by
summing exactly four of the five integers. Then print the respective minimum and maximum values
 as a single line of two space-separated long integers.

Example arr = [1, 3, 5, 7, 9]

The minimum sum is  1 + 3 + 5 + 7 = 16
and the maximum sum is 3 + 5 + 7 + 9 = 24. 
The function prints 16  24
*/
arr = [1, 3, 5, 7, 9];

function miniMaxSum(arr) {
  // Write your code here

  //Results
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    sum1 = [...arr];
    sum1.splice(i, 1);
    let sum = sumArray(sum1);
    results[i] = sum;
  }

  results.sort((a, b) => a - b);

  let last = results.length - 1;
  console.log(`${results[0]}  ${results[last]}`);
}

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

miniMaxSum(arr);
