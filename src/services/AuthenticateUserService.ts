import {User} from "../entity/User";
import { getRepository } from 'typeorm';
import authConfig from '../config/auth';
import { sign } from 'jsonwebtoken'
import AppError from "../erros/AppError";

interface UserDTO {
    email: string;
}

interface UserResponse {
    user: string;
    token: string;
    expiresIn: string;
}
class AuthenticateUserService {
  public async execute(data: UserDTO): Promise<UserResponse> {
    this.validEmailRecive(data);

    const userRepository = getRepository(User);
    const user = await userRepository.findOne({email: data.email});

    if (!user) {
      throw new AppError('User not found');
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
      issuer: 'quikdev'
    })

    return {user: user.name, token: token, expiresIn: expiresIn}
  }

  private validEmailRecive(data: UserDTO) {
    if (!data.email) {
      throw new AppError('Email is required');
    }
    if (!data.email.includes('@')) {
      throw new AppError('Invalid email');
    }
  }
}

export default AuthenticateUserService;