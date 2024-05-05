import {getRepository} from "typeorm";
import {Comment} from "../../entity/Commet";
import AppError from "../../erros/AppError";

interface IRequestDTO {
    idComment: string;
    authorId: string;
    description: string;
}

class UpdateCommentByIdAndAuthorIdService {
    async execute(data: IRequestDTO) {

        const repository = getRepository(Comment);
        const comment = await repository.findOne({where: {id: data.idComment, userId: data.authorId}});

        if(!comment) {
            throw new AppError('Comment not found or user not authorized');
        }

        comment.description = data.description;
        const commentSave = await repository.save(comment);
        return {message: 'Comment updated'};
    }
}

export default UpdateCommentByIdAndAuthorIdService;