import { Router } from 'express';

import { listProducts } from '../app/useCases/products/listProducts';

const productRoutes = Router();

productRoutes.get('/', listProducts);
productRoutes.get('/:id/products');
productRoutes.post('/');

export { productRoutes };
