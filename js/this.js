function add (a, b) {
    return this.x + a + b;
}

console.log(add.bind({ x: 1 }, 1)); // doesn't execute
console.log(add.call({ x: 1 }, 1, 1));
console.log(add.apply({ x: 1 }, [1, 1]));
