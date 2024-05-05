import {Post} from "../../entity/Post";
import {getRepository} from "typeorm";
import {History} from "../../entity/History";

interface IRequestDTO {
    postId: number;
    old: string;
    new: string;
    filed: string;
}

class CreateHistoryPostByPostIdService {
    async execute(data: IRequestDTO) {
        const repository = getRepository(History);
        const history = new History();
        const post = new Post();
        post.id = data.postId;
        history.postId = post;
        history.old = data.old;
        history.new = data.new;
        history.field = data.filed;
        const response = await repository.save(history);
        console.log('History created successfully');
    }
}

export default CreateHistoryPostByPostIdService;