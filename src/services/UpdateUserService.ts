import {getRepository} from "typeorm";
import {User} from "../entity/User";

interface IUpdateUserDTO {
    id: string;
    email?: string;
    name?: string;
    userIdEdited?: number;
}

class UpdateUserService {
    async execute(userRequest: IUpdateUserDTO) {
        const repository = getRepository(User);
        const user = await repository.findOne(userRequest.id);

        if(!user) {
            throw new Error('User not found');
        }

        if(userRequest.email) {
            user.email = userRequest.email;
        }

        if(userRequest.name) {
            user.name = userRequest.name;
        }

        user.editorUser= userRequest.userIdEdited ? await repository.findOne(userRequest.userIdEdited) : null;
        const userSave = await repository.save(user);
        return {id: userSave.id, message: 'User updated'};
    }
}

export default UpdateUserService;