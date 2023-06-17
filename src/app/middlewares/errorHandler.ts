/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../error/ApiError';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if(err instanceof ApiError) {
        return res.status(err.statusCode).json({
            error: err.message
        });
    }

    console.log(err.message);

    return res.sendStatus(500);
}
