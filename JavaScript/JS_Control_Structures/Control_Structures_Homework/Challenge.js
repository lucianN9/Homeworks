// Using nested for generate the following pattern
let arr = [
  {
    information: {
      id: [0, 1, 0, 1],
    },
  },
  {
    information: {
      id: [1, 0, 1, 0],
    },
  },
  {
    information: {
      id: [0, 1, 0, 1],
    },
  },
  {
    information: {
      id: [1, 0, 1, 0],
    },
  },
];

for (x = 0; x < arr.length; x++) {
  console.log(arr[x].information.id);
}
