/*
4) Hackerranck - 2D Array

*/

/*
Model
a b c
  d
e f g
*/

//Expected 19

let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
//Total sums
let sums = [];

//Snapshot pointer initial state
let a = [0, 0];
let b = [0, 1];
let c = [0, 2];
let d = [1, 1];
let e = [2, 0];
let f = [2, 1];
let g = [2, 2];

function hourglassSum(arr) {
  for (let i = 0; i < 4; i++) {
    let arrd1 = i;
    for (let j = 0; j < 4; j++) {
      let arrd2 = j;
      //Takes hourglass snapshot
      gethourglassModel(arr, arrd1, arrd2);
    }
  }
  sums.sort((a, b) => a - b);
  let greater = sums.at(-1);
  console.log(greater);
}

function gethourglassModel(arr, arrd1, arrd2) {
  //Beggining
  if (arrd1 == 0 && arrd2 == 0) {
  }
  //Jump
  else if (arrd1 > 0 && arrd2 == 0) {
    a[0] = a[0] + 1;
    b[0] = b[0] + 1;
    c[0] = c[0] + 1;
    d[0] = d[0] + 1;
    e[0] = e[0] + 1;
    f[0] = f[0] + 1;
    g[0] = g[0] + 1;

    a[1] = 0;
    b[1] = 1;
    c[1] = 2;
    d[1] = 1;
    e[1] = 0;
    f[1] = 1;
    g[1] = 2;
  }
  //Moving to next column
  else {
    a[1] = a[1] + 1;
    b[1] = b[1] + 1;
    c[1] = c[1] + 1;
    d[1] = d[1] + 1;
    e[1] = e[1] + 1;
    f[1] = f[1] + 1;
    g[1] = g[1] + 1;
  }

  //Gets hourglass data
  // console.log(`__________________________`);
  // console.log(arr[a[0]][a[1]]);
  // console.log(arr[b[0]][b[1]]);
  // console.log(arr[c[0]][c[1]]);
  // console.log(arr[d[0]][d[1]]);
  // console.log(arr[e[0]][e[1]]);
  // console.log(arr[f[0]][f[1]]);
  // console.log(arr[g[0]][g[1]]);

  let arrFin = [
    arr[a[0]][a[1]],
    arr[b[0]][b[1]],
    arr[c[0]][c[1]],
    arr[d[0]][d[1]],
    arr[e[0]][e[1]],
    arr[f[0]][f[1]],
    arr[g[0]][g[1]],
  ];
  let sum = arrFin.reduce((a, b) => a + b, 0);
  sums.push(sum);
}

hourglassSum(arr);
