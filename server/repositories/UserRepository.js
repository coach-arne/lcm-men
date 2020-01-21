import {fsReadFile, fsWriteFile} from '../../js/promise-file-system';
import {head, omit} from 'ramda';

let Users = null;

const setUsers = (raw) => Users = JSON.parse(raw);

export const initialize = () => fsReadFile(`${DIR}/server/data/users.json`).then(setUsers);

const omitPassword = (user) => omit(['password'], user);

export const getAll = () => Promise.resolve(Users.map(omitPassword));
export const getById = (id) => Promise.resolve(omitPassword(Users.find((user) => user.id === id)));
export const create = (user) => {

    Users.push(user);

    // Persisting the data
    return fsWriteFile(`${DIR}/server/data/users.json`, JSON.stringify(Users))
        .then(() => user)
        .then(omitPassword);
};
