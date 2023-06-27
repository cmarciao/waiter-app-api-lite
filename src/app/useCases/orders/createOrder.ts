import { Request, Response } from 'express';

import { Order } from '../../models/Order';
import { Product } from '../../models/Product';

import { AppError } from '../../error/AppError';
import { io } from '../../../server';

export async function createOrder(req: Request, res: Response) {
    const { table, products } = req.body;

    if(!table) {
        throw new AppError('Table is required!');
    }

    for(const item of products) {
        const isProductExists = await Product.findById(item.product);

        if(!isProductExists) {
            throw new AppError('Some product not found!');
        }
    }

    const order = await Order.create({ table, products });
    const orderDetails = await order.populate('products.product');

    io.emit('orders@new', orderDetails);
    res.status(201).json(order);
}
