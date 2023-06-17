import { Request, Response } from 'express';
import mongoose from 'mongoose';

import { Order } from '../../models/Order';
import { AppError } from '../../error/AppError';

export async function changeOrderStatus(req: Request, res: Response) {
    const { id } = req.params;
    const { status } = req.body;

    const isValidId = mongoose.Types.ObjectId.isValid(id);

    if(!isValidId) {
        throw new AppError('Invalid order id!');
    }

    const isOrderExists = await Order.findById(id);

    if(!isOrderExists) {
        throw new AppError('Order not found!', 404);
    }

    if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
        throw new AppError('Status should be one of these: WAITING, IN_PRODUCTION, DONE');
    }

    return res.sendStatus(204);
}
