import fetch from 'node-fetch';

const asTitle = ({ title }) => title;

const toJson = ({ json }) => json();
const get = (url) => fetch(url).then(toJson);

const getPerson = (id) => get(`https://swapi.co/api/people/${id}`);
const getFilmsOfPerson = (person) => Promise.all(person.films.map(get));
const getFilmsOfPersonId = (id) => getPerson(id).then(getFilmsOfPerson);
const getFilmNamesOfPersonId = (id) => getFilmsOfPersonId(id).then(asTitle);

// getFilmNamesOfPersonId(1).then(console.log);