import { Router } from 'express';

import { listOrders } from '../app/useCases/orders/listOrders';

const orderRoutes = Router();

orderRoutes.get('/', listOrders);
orderRoutes.post('/');
orderRoutes.patch('/:id');
orderRoutes.delete('/:id');


export { orderRoutes };
