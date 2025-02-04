const array = [1, 2, 3, 4, 5, [4,6,8,9], 89, [1,2]];

console.log(array.flat(2));

// Flatmap

const array2 = [1, 2, 3, 4, 5];

console.log(array2.flatMap(value => [value, value * 2]));