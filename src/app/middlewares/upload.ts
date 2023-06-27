import path from 'node:path';
import multer from 'multer';

import { AppError } from '../error/AppError';

export const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            if(!file) {
                throw new AppError('Image is required!');
            }

            callback(null, path.resolve(__dirname, '..', '..', '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    })
});

