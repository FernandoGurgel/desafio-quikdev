import {getRepository} from "typeorm";
import {Post} from "../../entity/Post";

interface IPostResponseDTO {
    id: number;
    title: string;
    description: string;
    userName: string;
}

class GetAllPostByUserIdService {
    async execute(userId: number) {
        const repository = getRepository(Post);
        const postsResponse = await repository.find({where: {userId: userId}, relations: ['userId']});
        const mappedPosts: IPostResponseDTO[] = postsResponse.map(post => ({
            id: post.id,
            title: post.title,
            description: post.description,
            userName: post.userId.name,
        }));
        return {posts: mappedPosts};
    }
}

export default GetAllPostByUserIdService;