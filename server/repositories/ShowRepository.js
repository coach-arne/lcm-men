import * as Shows from '../data/silicon-valley';
import {uniq} from 'ramda';

const list = Object.values(Shows);

const hasId = (id) => (show) => show.id === id;

const bySeasonNumbers = (seasons, episode) => {

    if (!seasons.contains(episode.season)){
        seasons.push(episode.season);
    }

    return seasons;
};

const asSeason = ({ season }) => season;

export const getAll = () => Promise.resolve(list);
export const getById = (id) => Promise.resolve(list.find(hasId(id)));
export const getSeasons = (id) => getById(id).then((show) => uniq(show.episodes.map(asSeason)));