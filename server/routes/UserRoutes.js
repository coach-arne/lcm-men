import {sendPromiseResponse} from '../helper/ResponseHelper';
import {createUser, getUserById, getUsers, removeUser, updateUser} from '../services/UserService';
import {isValidForCreation, isValidForEditing} from '../validators/UserValidator';
import {hasPermission} from '../validators/PermissionValidator';


export default (router) => {

    router.get('/users', (req, res) => sendPromiseResponse(req, res, getUsers()));
    router.get('/users/:id', (req, res) => sendPromiseResponse(req, res, getUserById(req.params.id)));
    router.post('/users', isValidForCreation, (req, res) => sendPromiseResponse(req, res, createUser(req.body)));
    router.put('/users/:id', isValidForEditing, (req, res) => sendPromiseResponse(req, res, updateUser(req.body)));
    router.delete('/users/:id', hasPermission('DELETE_USER'), (req, res) => sendPromiseResponse(req, res, removeUser(req.params.id)))

};