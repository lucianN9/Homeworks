// Compute the maximum of the elements of an array and display it in the console

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = 0;

for (const value of arr) {
  if (value > max) {
    max = value;
  }
}
console.log(max);
