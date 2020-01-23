import {Schema, model} from 'mongoose';

const rawSchema = {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
};

const userSchema = new Schema(rawSchema, {});

export default model('User', userSchema);

