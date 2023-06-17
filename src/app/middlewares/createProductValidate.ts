import { NextFunction, Request, Response} from 'express';
import mongoose from 'mongoose';

import { Category } from '../models/Category';
import { AppError } from '../error/AppError';

export async function validateCreateProduct(req: Request, res: Response, next: NextFunction) {
    const {
        name,
        description,
        price,
        category
    } = req.body;

    if(!name) {
        throw new AppError('Name is required!');
    }

    if(!description) {
        throw new AppError('Description is required!');
    }

    if(!price) {
        throw new AppError('Price is required!');
    }

    const isValidId = mongoose.Types.ObjectId.isValid(category);

    if(!isValidId) {
        throw new AppError('Category id is not valid!', 400);
    }

    const isCategoryExists = await Category.findById(category);

    if(!isCategoryExists) {
        throw new AppError('Category not found', 404);
    }

    next();
}
