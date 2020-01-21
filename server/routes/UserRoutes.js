import {sendPromiseResponse} from '../helper/ResponseHelper';
import {createUser, getUserById, getUsers} from '../services/UserService';
import {isValidForCreation} from '../validators/UserValidator';


export default (router) => {

    router.get('/users', (req, res) => sendPromiseResponse(req, res, getUsers()));
    router.get('/users/:id', (req, res) => sendPromiseResponse(req, res, getUserById(req.params.id)));
    router.post('/users', isValidForCreation, (req, res) => sendPromiseResponse(req, res, createUser(req.body)));

};