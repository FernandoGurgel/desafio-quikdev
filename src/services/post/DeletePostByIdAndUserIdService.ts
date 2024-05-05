import {Post} from "../../entity/Post";
import {getRepository} from "typeorm";
import AppError from "../../erros/AppError";

interface IRequestDTO {
    postId: string;
    userId: string;
}

class DeletePostByIdAndUserIdService {
    async execute(data: IRequestDTO) {
        const repository = getRepository(Post);
        const post = await repository.findOne({where: {id: data.postId, userId: data.userId}, relations: ['userId']});

        if(!post) {
            throw new AppError('Post not found');
        }

        await repository.remove(post);
        return {message: 'Post deleted successfully'};
    }
}

export default DeletePostByIdAndUserIdService;