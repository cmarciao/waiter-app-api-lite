import path from 'node:path';

import 'express-async-errors';
import express from 'express';
import mongoose from 'mongoose';

import { routes } from './routes/routes';
import { errorHandler } from './app/middlewares/errorHandler';

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        const app = express();
        const port = 3001;

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(express.json());

        app.use(routes);
        app.use(errorHandler);

        app.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });
    })
    .catch(() => console.log('Error in mongodb connection.'));
