import CrudRepository from '../repositories/CrudRepository';
import {hash} from 'bcrypt';
import UserModel from '../models/UserModel';

const UserRepository = CrudRepository(UserModel);

export const getUsers = UserRepository.getAll;
export const getUserById = UserRepository.getById;

export const updateUser = (user) => {
    return getUserById(user._id).then((old) => {
        user.password = old.password;
        return UserRepository.update(user);
    });
};

export const createUser = (user) => {

    return hash(user.password, 2).then((hashed) => {
        user.password = hashed;

        return UserRepository.create(user);
    });
};

export const removeUser = UserRepository.remove;