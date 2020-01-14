/**

 immutable <> mutable

 */

const R = require('ramda');

const numbers = [1,3,3,5,6,2,1,3,5,3];
const sortBy = (a, b) => b - a;


function doStuff (numbers) {
    const sorted = R.sort(sortBy, numbers);
    console.log('in function:', sorted);
}

doStuff(numbers);

console.log(numbers);

const newNumbers = [3,2,3,4,5];

//slice
console.log(newNumbers.slice(1, 2));
console.log(newNumbers);

//splice - mutable
// 1: where to start
// 2: remove how many
// 3: insert, , , , ,
newNumbers.splice(0,0,1);
console.log(newNumbers);


