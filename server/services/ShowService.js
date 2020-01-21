import {getAll, getById, getSeasons} from '../repositories/ShowRepository';

export const getShows = () => getAll();
export const getShowById = (id) => getById(id);
export const getShowSeasons = (id) => getSeasons(id);