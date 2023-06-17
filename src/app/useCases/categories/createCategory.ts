import { Request, Response } from 'express';

import { Category } from '../../models/Category';
import { AppError } from '../../error/AppError';

export async function createCategory(req: Request, res: Response) {
    const { icon, name } = req.body;

    if(!icon) {
        throw new AppError('Icon is required!');
    }

    if(!name) {
        throw new AppError('Name is required!');
    }

    const isCategoryExists = await Category.find().where('name').equals(name);

    if(isCategoryExists.length != 0) {
        throw new AppError('Category already exists!');
    }

    const category = await Category.create({ name, icon });

    res.status(201).json(category);
}
