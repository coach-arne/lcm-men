import {create, getAll, getById, remove, update} from '../repositories/UserRepository';
import {hash} from 'bcrypt';
import UUID from 'uuid';

export const getUsers = getAll;
export const getUserById = getById;

export const updateUser = (user) => {
    return getUserById(user.id).then((old) => {
        user.password = old.password;
        return update(user);
    });
};

export const createUser = (user) => {

    user.id = UUID.v4();

    return hash(user.password, 2).then((hashed) => {
        user.password = hashed;

        return create(user);
    });
};

export const removeUser = remove;