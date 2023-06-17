import { Router } from 'express';

import { listCategories } from '../app/useCases/categories/listCategories';

const categoryRoutes = Router();

categoryRoutes.get('/', listCategories);
categoryRoutes.post('/');


export { categoryRoutes };
