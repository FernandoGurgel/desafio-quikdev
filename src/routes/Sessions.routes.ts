import {Router, Request, Response} from 'express';
import AuthenticateUserService from "../services/auth/AuthenticateUserService";

export const sessionRouter = Router();

sessionRouter.post('/', async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Auth']
     */
    const {email} = req.body;
    const authenticateUserService = new AuthenticateUserService();
    const response = await authenticateUserService.execute({email});
    return res.json(response)
});

export default sessionRouter;