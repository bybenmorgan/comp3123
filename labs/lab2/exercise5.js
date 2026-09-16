const array = [1, 2, 3, 4];

const calculateSum = array.reduce((sum, number) => sum + number, 0);

const calculateProduct = array.reduce((product, number) => product * number, 1);

console.log(calculateSum);
console.log(calculateProduct);