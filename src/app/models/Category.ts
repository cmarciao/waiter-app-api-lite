import { model, Schema } from 'mongoose';

export const Category = model('Caregory', new Schema({
    name: {
        tyep: String,
        required: true
    },
    icon: {
        type: String,
        require: true
    }
}));
