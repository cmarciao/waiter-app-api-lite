import { Router } from 'express';

const orderRoutes = Router();

orderRoutes.get('/');
orderRoutes.post('/');
orderRoutes.patch('/:id');
orderRoutes.delete('/:id');


export { orderRoutes };
