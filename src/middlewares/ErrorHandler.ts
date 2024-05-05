import { NextFunction, Request, Response } from 'express';
import AppError from "../erros/AppError";

const errorHandler = async (err: Error, request: Request, response: Response, _: NextFunction): Promise<Response> => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        })
    }
    console.error(err)
    return response.status(500).json({
        status: 'Error',
        message: 'Internal server error',
    })
}

export default errorHandler;