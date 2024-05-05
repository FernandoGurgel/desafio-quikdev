import {getRepository} from "typeorm";
import {User} from "../../entity/User";
import AppError from "../../erros/AppError";

class DeleteUserService {
    public async execute(id: string): Promise<any> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne(id);

        if (!user) {
            throw new AppError('User not found');
        }

        await usersRepository.remove(user);
        return {message: 'User deleted successfully'};
    }
}

export default DeleteUserService;