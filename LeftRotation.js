/*
5) Hackerranck - Left Rotation
*/

let arr = [1, 2, 3, 4, 5];

function rotateLeft(d, arr) {
  for (let i = 0; i < d; i++) {
    let currentFirst = arr[0];
    arr.splice(0, 1);
    arr.push(currentFirst);
  }
  console.log(arr);
}

rotateLeft(4, arr);
