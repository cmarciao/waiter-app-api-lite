import { Router } from 'express';

import { listCategories } from '../app/useCases/categories/listCategories';
import { createCategory } from '../app/useCases/categories/createCategory';

const categoryRoutes = Router();

categoryRoutes.get('/', listCategories);
categoryRoutes.post('/', createCategory);


export { categoryRoutes };
