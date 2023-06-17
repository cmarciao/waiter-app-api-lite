import { Router } from 'express';

import { listOrders } from '../app/useCases/orders/listOrders';
import { createOrder } from '../app/useCases/orders/createOrder';
import { changeOrderStatus } from '../app/useCases/orders/changeOrderStatus';
import { cancelOrder } from '../app/useCases/orders/deleteOrder';

const orderRoutes = Router();

orderRoutes.get('/', listOrders);
orderRoutes.post('/', createOrder);
orderRoutes.patch('/:id', changeOrderStatus);
orderRoutes.delete('/:id', cancelOrder);


export { orderRoutes };
