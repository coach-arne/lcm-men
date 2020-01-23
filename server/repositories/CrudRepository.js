import {connect} from 'mongoose';
import User from '../models/UserModel';
import {omit} from 'ramda';


connect('mongodb://localhost/lcm', { keepAlive: true, keepAliveInitialDelay: 300000, useNewUrlParser: true });

const toObject = (item) => item.toObject();
const listToObject = (list) => list.map(toObject);

const getAll = (model) => () => model.find().then(listToObject);
const getById = (model) => (id) => model.findOne({ _id: id }).then(toObject);
const update = (model) => (user) => model.findOneAndUpdate(user.id, user, { new: true });
const create = (model) => (user) => new model(user).save().then(toObject);
const remove = (model) => (id) => model.deleteOne({ _id: id });

export default (model) => ({
    getAll: getAll(model),
    getById: getById(model),
    update: update(model),
    create: create(model),
    remove: remove(model)
})
