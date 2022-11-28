/*
2) Hackerranck - Time Conversion

   Unfinished

*/

time = "04:59:59PM";

function timeConversion(s) {
  // Write your code here

  //24 hours matrix
  let hours = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  ];

  //Divides string
  let splited = s.split(":");

  //Get hour and day part
  let hour = parseInt(splited[0]);
  let hour1 = hour - 1;
  let minutes = splited[1];
  let seconds = splited[2].substring(0, 2);
  let dayPart = splited[2].substring(2, 4);
  let level = dayPart == "AM" ? 0 : 1;

  let hour2 = hours[level][hour1] == 12 ? "00" : hours[level][hour1];

  //Formats string
  console.log(`${hour2}:${minutes}:${seconds}`);
}

timeConversion(time);
