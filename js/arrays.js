// filter
// sort
// map
// reduce

const array = require('../datasets/tshirt-marketing');

const asName = ({ name }) => name;
const pick = (property) => (obj) => obj[property];
const getNamesFromItems = (array) => array.map(pick('name'));

const byPartialName = (partial) => ({ name }) => name.startsWith(partial);
const filterByPartialName = (partial, array) => array.filter(byPartialName(partial));

console.log(filterByPartialName('Hel', array));

// Destructuring Arrays
const Products = {
    id1: { name: 'Macbook' },
    id2: { name: 'XPS' }
};

console.log(Object.entries(Products).map(([key, _]) => key));

const add = (a, b) => a + b;
const numbers = [1, 2];

console.log(add(...numbers));

const head = ([head, ...rest]) => head;
console.log(head([1,2,3,4]));










console.log(array.reduce((people, item) => {
    people[item.id] = item.name;
    return people;
},{}));






[1,2,3].reduce((a, b) => a + b, 0);