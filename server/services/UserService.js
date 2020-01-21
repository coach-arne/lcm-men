import {create, getAll, getById} from '../repositories/UserRepository';
import {hash} from 'bcrypt';
import UUID from 'uuid';

export const getUsers = getAll;
export const getUserById = getById;
export const createUser = (user) => {

    user.id = UUID.v4();

    return hash(user.password, 2).then((hashed) => {
        user.password = hashed;

        return create(user);
    });
};