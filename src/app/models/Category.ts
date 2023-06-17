import { model, Schema } from 'mongoose';

export const Category = model('Caregory', new Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
}));
