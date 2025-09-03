const arr = [1,2,3,4,5]
const arr1 = [6,7,8,9,10]
const arr3 = [...arr1, ...arr];
const arr4 = [...arr1, 9, 0,...arr].reverse();
console.log(arr3);
console.log(arr4);
console.log(arr4.sort())