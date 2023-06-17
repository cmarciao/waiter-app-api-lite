import { Request, Response } from 'express';
import mongoose from 'mongoose';

import { Product } from '../../models/Product';
import { Category } from '../../models/Category';

import { AppError } from '../../error/AppError';

export async function listProductsByCategory(req: Request, res: Response) {
    const { id } = req.params;

    const isValidId = mongoose.Types.ObjectId.isValid(id);

    if(!isValidId) {
        throw new AppError('Category id is not valid!', 400);
    }

    const isCategoryExists = await Category.findById(id);

    if(!isCategoryExists) {
        throw new AppError('Category not found', 404);
    }

    const products = await Product.find().where('category').equals(id);

    return res.json(products);
}
