import {Router, Request, Response} from 'express';
import AuthenticateUserService from "../services/AuthenticateUserService";

export const sessionRouter = Router();

sessionRouter.post('/', async (req: Request, res: Response) => {
    const {email} = req.body;
    const validateUserService = new AuthenticateUserService();
    const response = await validateUserService.execute({email});
    return res.json(response)
});

export default sessionRouter;