import express from 'express';
import mongoose from 'mongoose';

import { routes } from './routes/routes';

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        const app = express();

        app.use(routes);

        const port = 3001;
        app.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });
    })
    .catch(() => console.log('Error in mongodb connection.'));
