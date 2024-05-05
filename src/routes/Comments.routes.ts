import {Router} from "express";
import authenticate from "../middlewares/Authenticate";
import CreateCommentInPost from "../services/comment/CreateCommentInPost";
import UpdateCommentByIdAndAuthorIdService from "../services/comment/UpdateCommentByIdAndAuthorIdService";
import DeleteCommentByIdAndAuthorIdService from "../services/comment/DeleteCommentByIdAndAuthorIdService";


export const commentsRoutes = Router();

commentsRoutes.post('/:idPost', authenticate, async (req, res) => {
    /**
     #swagger.tags = ['Comments']
     #swagger.security = [{ "bearerAuth": [] }]
     */
    const {description} = req.body;
    const authorId = req.userId;
    const idPost = req.params.idPost;

    const createPostService = new CreateCommentInPost();
    const response = await createPostService.execute(
        {description, authorId, idPost}
    );
    return res.json(response)
});

commentsRoutes.put('/:idComment', authenticate, async (req, res) => {
    /**
     #swagger.tags = ['Comments']
     #swagger.security = [{ "bearerAuth": [] }]
     */
    const {description} = req.body;
    const authorId = req.userId
    const idComment = req.params.idComment

    const updateCommentService = new UpdateCommentByIdAndAuthorIdService();
    const response = await updateCommentService.execute(
        {description, authorId, idComment})
    return res.json(response)
});

commentsRoutes.delete('/:idComment', authenticate, async (req, res) => {

    /**
     #swagger.tags = ['Comments']
     #swagger.security = [{ "bearerAuth": [] }]
     */

    const {idComment} = req.params;
    const authorId = req.userId;
    const deleteCommentService = new DeleteCommentByIdAndAuthorIdService();
    const response = await deleteCommentService.execute(
        {idComment, authorId}
    );
    return res.json(response)
});

export default commentsRoutes;