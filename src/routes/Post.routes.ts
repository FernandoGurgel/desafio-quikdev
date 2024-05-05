import {Request, Response, Router} from 'express';
import authenticate from "../middlewares/Authenticate";
import CreatePostService from "../services/post/CreatePostService";
import GetAllPostByUserIdService from "../services/post/GetAllPostByUserIdService";
import DeletePostByIdAndUserIdService from "../services/post/DeletePostByIdAndUserIdService";
import UpdatePostByUserIdAndIdService from "../services/post/UpdatePostByUserIdAndIdService";

export const postsRouter = Router();

postsRouter.post('/', authenticate, async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Posts']
     #swagger.security = [{ "bearerAuth": [] }]
     */
    const {title, description} = req.body;
    const authorId = req.userId;
    const createPostService = new CreatePostService();
    const response = await createPostService.execute(
        {title, description, authorId}
    );
    return res.json(response)
});

postsRouter.put('/:id', authenticate, async (req: Request, res: Response) => {
    /* #swagger.summary = 'Update user
         #swagger.tags = ['Posts']
         #swagger.parameters['id'] = { description: 'User ID' }
         #swagger.security = [{ "bearerAuth": [] }]
        */
    const {title, description} = req.body;
    const id = req.params.id;
    const userId = req.userId;
    const service = new UpdatePostByUserIdAndIdService();
    const response = await service.execute({id, title, description, userId});
    return res.json(response)
});

postsRouter.delete('/:id', authenticate, async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Posts']
     #swagger.security = [{ "bearerAuth": [] }]
     */
    const postId = req.params.id;
    const userId = req.userId;

    const service = new DeletePostByIdAndUserIdService();
    const reponse = await service.execute({postId, userId});

    return res.json(reponse);
});

postsRouter.get('/', authenticate, async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Posts']
     #swagger.security = [{ "bearerAuth": [] }]
     */
    const authorId = req.userId;
    const getAllPostByUserIdService = new GetAllPostByUserIdService();
    const users = await getAllPostByUserIdService.execute(authorId);

    return res.json(users);
});
export default postsRouter;