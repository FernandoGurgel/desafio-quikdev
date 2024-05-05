import {getRepository} from "typeorm";
import {Post} from "../../entity/Post";

interface IPostResponseDTO {
    id: number;
    title: string;
    description: string;
    userName: string;
    likes: number;
    dislikes: number;
    counterViews: number;
}

class GetAllPostByUserIdService {
    async execute() {
        const repository = getRepository(Post);
        const postsResponse = await repository.find({relations: ['userId', 'comments']});
        const mappedPosts: IPostResponseDTO[] = postsResponse.map(post => ({
            id: post.id,
            title: post.title,
            description: post.description,
            userName: post.userId.name,
            likes: post.likes,
            dislikes: post.dislikes,
            counterViews: post.counterViews,
            comments: post.comments
        }));
        return {posts: mappedPosts};
    }
}

export default GetAllPostByUserIdService;