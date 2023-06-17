import { Router } from 'express';

const productRoutes = Router();

productRoutes.get('/');
productRoutes.get('/:id/products');
productRoutes.post('/');

export { productRoutes };
