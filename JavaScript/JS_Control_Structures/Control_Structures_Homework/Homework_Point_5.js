// Compute how many times a certain element appears in an array

let arr = [
  "apple",
  "pear",
  "mango",
  "apple",
  "apple",
  "banana",
  "orange",
  "kiwi",
];
let sum = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] === "apple") {
    console.log(i);
  }
}
