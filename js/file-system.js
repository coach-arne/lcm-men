import {fsReadFile} from './promise-file-system';

const toJson = (raw) => JSON.parse(raw);

fsReadFile(`${__dirname}/person.json`, 'utf-8')
    .then(toJson)
    .then(console.log);
