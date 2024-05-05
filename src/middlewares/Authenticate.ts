import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import authConfig from '../config/Auth';

export default function authenticate(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'JWT token is missing' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decodedToken = jwt.verify(token, authConfig.jwt.secret);

        return next();
    } catch {
        return res.status(401).json({ message: 'Invalid JWT token' });
    }
}