import {Request, Response, Router} from 'express';
import CreateUserService from "../services/CreateUserService";
import UpdateUserService from "../services/UpdateUserService";
import DeleteUserService from "../services/DeleteUserService";
import authenticate from "../middlewares/Authenticate";

export const userRouter = Router();

userRouter.post('/', authenticate, async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Users']
     #swagger.security = [{ "bearerAuth": [] }]
     */
    const {email, name} = req.body;
    const createUserService = new CreateUserService();
    const response = await createUserService.execute({email, name});
    return res.json(response)
});

userRouter.put('/:id', authenticate, async (req: Request, res: Response) => {
    /* #swagger.summary = 'Update user
         #swagger.tags = ['Users']
         #swagger.parameters['id'] = { description: 'User ID' }
         #swagger.security = [{ "bearerAuth": [] }]
        */
    const {email, name} = req.body;
    const id = req.params.id;
    const updateUserService = new UpdateUserService();
    const response = await updateUserService.execute({id, email, name});
    return res.json(response)
});

userRouter.delete('/:id', authenticate, async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Users']
     #swagger.security = [{ "bearerAuth": [] }]
     */
    const id = req.params.id;

    const deleteUserService = new DeleteUserService();
    const reponse = await deleteUserService.execute(id);

    return res.json(reponse);
});
export default userRouter;