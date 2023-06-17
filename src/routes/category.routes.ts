import { Router } from 'express';

import { listCategories } from '../app/useCases/categories/listCategories';
import { createCategory } from '../app/useCases/categories/createCategory';
import { listProductsByCategory } from '../app/useCases/categories/listProductsByCategory';

const categoryRoutes = Router();

categoryRoutes.get('/', listCategories);
categoryRoutes.get('/:id/products', listProductsByCategory);
categoryRoutes.post('/', createCategory);


export { categoryRoutes };
