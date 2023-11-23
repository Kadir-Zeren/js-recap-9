// const grades = [55, 77, 23, 89, 100, 44, 33, 45];
// let sum = 0;

// for (let i = 0; i < grades.length; i++) {
//   sum += grades[i];
// }
// console.log("AVG:", (sum / grades.length).toFixed(2));

// const lessThan50 = [];
// const equalOrBiggerThan50 = [];
// for (let j = 0; j < grades.length; j++) {
//   if (grades[j] < 50) {
//     lessThan50.push(grades[j]);
//   } else {
//     equalOrBiggerThan50.push(grades[j]);
//   }
// }
// console.log(lessThan50);
// console.log(equalOrBiggerThan50);
// console.log(grades);

// const grades = [55, 77, 23, 89, 100, 44, 33, 45];

// const lessThan50 = [];
// const equalOrBiggerThan50 = [];
// for (let i in grades) {
//   grades[i] < 50
//     ? lessThan50.push(grades[i])
//     : equalOrBiggerThan50.push(grades[i]);
// }
// console.log(lessThan50);
// console.log(equalOrBiggerThan50);
// console.log(grades);

// const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"];
// const findStudent = (name) => {
//   let counter = 0;
//   for (let student of students) {
//     student === name.toLowerCase() && counter++;
//   }
//   return counter === 0
//     ? `${name} can not be found`
//     : `${name} found ${counter} times`;
// };
// 1;
// console.log(findStudent("ahmet"));
// console.log(findStudent("AHMET"));
// console.log(findStudent("ismet"));
// console.log(findStudent("Alihan"));

const prices = [250, 150, 300, 500];

for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}
console.log("*********");
prices.forEach((p) => console.log(p));
console.log("*********");
prices.forEach((p, i) => console.log("Deger:", p, "INDIS:", i));
