import { Router } from 'express';

import { categoryRoutes } from './category.routes';
import { productRoutes } from './product.routes';
import { orderRoutes } from './order.routes';

const routes = Router();

routes.use('/categories', categoryRoutes);
routes.use('/products', productRoutes);
routes.use('/orders', orderRoutes);

export { routes };
