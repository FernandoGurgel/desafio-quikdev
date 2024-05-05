import {Request, Response, Router} from 'express';
import CreateUserService from "../services/CreateUserService";
import UpdateUserService from "../services/UpdateUserService";
import DeleteUserService from "../services/DeleteUserService";
import authenticate from "../middlewares/Authenticate";
import GetAllUsersService from "../services/GetAllUsersService";


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
    // @ts-ignore
    const userIdEdited = req.userId;
    const updateUserService = new UpdateUserService();
    const response = await updateUserService.execute({id, email, name, userIdEdited});
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

userRouter.get('/', authenticate, async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Users']
     #swagger.security = [{ "bearerAuth": [] }]
     */
    const getAllUsersService = new GetAllUsersService();
    const users = await getAllUsersService.execute();

    return res.json(users);
});
export default userRouter;