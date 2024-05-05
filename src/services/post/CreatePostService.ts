import {getRepository} from "typeorm";
import {Post} from "../../entity/Post";
import {User} from "../../entity/User";

interface ICreatePostDTO {
    title: string;
    description: string;
    authorId: string;
}

class CreatePostService {
    async execute(postRequest: ICreatePostDTO) {
        const repository = getRepository(Post);
        const post = new Post();
        post.title = postRequest.title;
        post.description = postRequest.description;

        const user = new User();
        user.id = Number(postRequest.authorId);
        post.userId = user;

        const postSave = await repository.save(post);
        return {id: postSave.id, message: 'Post created successfully'};
    }
}

export default CreatePostService;