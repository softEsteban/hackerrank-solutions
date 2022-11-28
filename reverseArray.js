/*
3) Hackerranck - Reverse array

*/
let a = [1, 2, 3, 4, 5];

function reverseArray(a) {
  let a2 = [];
  let index = a.length - 1;
  for (let i = 0; i < a.length; i++) {
    a2[i] = a[index];
    index--;
  }
  console.log(a2);
}

reverseArray(a);
