import { Router } from 'express';

import { listOrders } from '../app/useCases/orders/listOrders';
import { createOrder } from '../app/useCases/orders/createOrder';

const orderRoutes = Router();

orderRoutes.get('/', listOrders);
orderRoutes.post('/', createOrder);
orderRoutes.patch('/:id');
orderRoutes.delete('/:id');


export { orderRoutes };
