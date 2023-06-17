import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { listProducts } from '../app/useCases/products/listProducts';
import { createProduct } from '../app/useCases/products/createProduct';

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    })
});

const productRoutes = Router();

productRoutes.get('/', listProducts);
productRoutes.get('/:id/products');
productRoutes.post('/', upload.single('image'), createProduct);

export { productRoutes };
