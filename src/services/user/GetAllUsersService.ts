import {getRepository} from "typeorm";
import {User} from "../../entity/User";

class GetAllUsersService {
    async execute() {
        const repository = getRepository(User);
        const users = await repository.find();
        return users;
    }
}

export default GetAllUsersService;