import { Router } from 'express';
import { upload } from '../app/middlewares/upload';
import { validateCreateProduct } from '../app/middlewares/createProductValidate';

import { listProducts } from '../app/useCases/products/listProducts';
import { createProduct } from '../app/useCases/products/createProduct';

const productRoutes = Router();

productRoutes.get('/', listProducts);
productRoutes.post('/', validateCreateProduct, upload.single('image'), createProduct);

export { productRoutes };
