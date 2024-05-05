import {getRepository} from "typeorm";
import {Comment} from "../../entity/Commet";
import AppError from "../../erros/AppError";
import {Post} from "../../entity/Post";

interface IRequest {
    idComment: string;
    authorId: string;
}

class DeleteCommentByIdAndAuthorIdService {
    public async execute(data: IRequest): Promise<{ message: string }> {
        const repository = getRepository(Comment);
        const postRepository = getRepository(Post);

        const comment = await repository.findOne({where: {id: data.idComment}, relations: ['userId', 'postId']});
        if (!comment) {
            throw new AppError('Comment not found');
        }

        const post = await postRepository.findOne({where: {id: comment.postId.id}, relations: ['userId']});

        if (comment.userId.id !== parseInt(data.authorId) && post.userId.id !== parseInt(data.authorId)) {
            throw new AppError('You do not have permission to delete this comment');
        }
        if (comment.userId.id === parseInt(data.authorId)){
            comment.description = 'Message deleted by the user';
        }
        if (post.userId.id === parseInt(data.authorId)){
            comment.description = 'Message deleted by the author';
        }

        await repository.save(comment);

        return {message: 'Comment deleted successfully'};

    }
}

export default DeleteCommentByIdAndAuthorIdService;