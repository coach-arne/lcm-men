import {sendPromiseResponse} from '../helper/ResponseHelper';
import {authenticate} from '../services/AuthenticationService';
import {isValidForCreation} from '../validators/AuthenticationValidators';


export default (router) => {

    router.post('/authentication',
        isValidForCreation,
        (req, res) => sendPromiseResponse(req, res, authenticate(req.body)));

};