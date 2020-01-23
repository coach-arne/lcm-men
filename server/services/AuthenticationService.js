import {getUserById} from './UserService';
import {compare} from 'bcrypt';
import {sign} from 'jsonwebtoken';
import {omit} from 'ramda';
import {SECRET} from '../configuration/configuration';


export const authenticate = ({ id, password }) => {
    return getUserById(id).then((user) => {
        return compare(password, user.password)
            .then((result) => {
                if (result) {
                    return sign(omit(['password'], user), SECRET);
                } else {
                    throw new Error('Something');
                }
            });
    });
};