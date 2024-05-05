import {getRepository} from "typeorm";
import {Post} from "../../entity/Post";
import AppError from "../../erros/AppError";

interface IRequestDTO {
    id: string;
    userId: string;
    title?: string;
    description?: string;
}

class UpdatePostByUserIdAndIdService {
    async execute(data: IRequestDTO) {
        const repository = getRepository(Post);
        const post = await repository.findOne({where: {id: data.id, userId: data.userId}, relations: ['userId']});

        if(!post) {
            throw new AppError('Post not found');
        }

        if(data.title) {
            post.title = data.title;
        }
        if (data.description) {
            post.description = data.description;
        }

        await repository.save(post);
        return {id:data.id, message: 'Post updated successfully'};
    }
}

export default UpdatePostByUserIdAndIdService;