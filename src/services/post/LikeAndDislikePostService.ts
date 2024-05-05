import {getRepository} from "typeorm";
import {Post} from "../../entity/Post";
import AppError from "../../erros/AppError";

interface IRequestDTO {
    postId: string
    type: string;
}

class LikeAndDislikeAndCounterViewsPostService {
    async execute({postId, type}: IRequestDTO) {
        const postRepository = getRepository(Post);
        const post = await postRepository.findOne({where: {id: postId}});

        if(!post) {
            throw new AppError('Post not found', 404);
        }

        if(type === 'like') {
            post.likes += 1;
        }
        else if (type === 'dislike') {
            post.dislikes += 1;
        }
        else if (type === 'counterViews') {
            post.counterViews += 1;
        }

        else {
            throw new AppError('Type not found', 404);
        }

        await postRepository.save(post);
        return {message: `add ${type} successfully`}
    }
}

export default LikeAndDislikeAndCounterViewsPostService;