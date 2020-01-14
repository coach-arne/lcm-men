const array = [1,2,3];
const isEven = (n) => n % 2 === 0;


const filter = (fn, array) => {
    const filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            filtered.push(array[i]);
        }
    }
    return filtered
};

array.some(isEven);

console.log(filter(isEven, array));












const filtered2 = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        filtered2.push(array[i]);
    }
}