import {getRepository} from "typeorm";
import {User} from "../../entity/User";
import {Post} from "../../entity/Post";

interface IReportResponseDTO {
    title: string;
    quantityComments: number;
    quantityLikes: number;
    quantityDislikes: number;
    quantityViews: number;
}

class GetPostsToReportService {
    async execute() {
        const repository = getRepository(Post);
        const postsResponse = await repository.find({relations: ['userId', 'comments']});
        const mappedPosts: IReportResponseDTO[] = postsResponse.map(post => ({
            title: post.title,
            quantityComments: post.comments.length,
            quantityLikes: post.likes,
            quantityDislikes: post.dislikes,
            quantityViews: post.counterViews
        }));
        return mappedPosts;
    }
}

export default GetPostsToReportService;