import {getRepository} from "typeorm";
import {Comment} from "../../entity/Commet";
import {User} from "../../entity/User";
import {Post} from "../../entity/Post";
import AppError from "../../erros/AppError";
import MailService from "../email/MailService";

interface IRequestDTO {
    idPost: string;
    authorId: string;
    description: string;
}

class CreateCommentInPost {
    async execute(data: IRequestDTO) {
        const author = new User();
        author.id = Number(data.authorId);

        const repository = getRepository(Comment);
        const postRepository = getRepository(Post);

        const post = await postRepository.findOne({where: {id: data.idPost}, relations: ['userId']});

        if(!post) {
            throw new AppError('Post not found');
        }

        const comment = new Comment();
        comment.description = data.description;
        comment.userId = author;
        comment.postId = post;


        const commentSave = await repository.save(comment);

        await MailService.sendMail(post.userId.email, 'New Comment Added', 'A new comment has been added to the post.');
        return {commentSave, message: 'Comment created successfully'};
    }
}

export default CreateCommentInPost;