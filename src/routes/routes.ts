import { Router } from 'express';

import { productRoutes } from './product.routes';
import { categoryRoutes } from './category.routes';
import { orderRoutes } from './order.routes';

const routes = Router();

routes.use('/products', productRoutes);
routes.use('/categories', categoryRoutes);
routes.use('/ordes', orderRoutes);

export { routes };
