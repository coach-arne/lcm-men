import {getShowById, getShows} from '../services/ShowService';
import {sendPromiseResponse} from '../helper/ResponseHelper';

export default (router) => {

    router.get('/shows', (req, res) => sendPromiseResponse(req, res, getShows()));
    router.get('/shows/:id', (req, res) => sendPromiseResponse(req, res, getShowById(req.params.id)));
    router.get('/shows/:id/seasons', (req, res) => sendPromiseResponse(req, res, getShowById(req.params.id)));

};