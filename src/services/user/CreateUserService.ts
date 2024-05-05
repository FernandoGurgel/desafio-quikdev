import AppError from "../../erros/AppError";
import {getRepository} from "typeorm";
import {User} from "../../entity/User";
import {EmailValid} from "../../utils/Validations";

interface IUserDTO {
    email: string;
    name: string;
}
class CreateUserService {

    async execute(userRequest: IUserDTO) {
        const repository = getRepository('User');

        if(!userRequest.email || !userRequest.name) {
            throw new AppError('Missing information')
        }

        EmailValid(userRequest.email);
        const userResponse = await repository.findOne({email: userRequest.email});

        if(userResponse) {
            throw new AppError('Email already exists');
        }

        const user = new User();
        user.email = userRequest.email;
        user.name = userRequest.name;

        const userSave = await repository.save(user);
        return {id: userSave.id, email: userSave.email, name: userSave.name};
    }

}

export default CreateUserService;