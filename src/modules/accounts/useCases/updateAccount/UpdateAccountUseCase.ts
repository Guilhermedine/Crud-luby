import { injectable, inject } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError"
import { User } from "../../../../database/models/User";
import { hash } from "bcrypt"

interface IRequest {
  name,
  avatar,
  biography,
  email,
  password_hash,
  id
}

interface IResponse {
  name,
  avatar,
  biography,
  email,
  password_hash,
}


@injectable()
class UpdateAccountUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository) { }

  async execute({ id, name, avatar, biography, email, password_hash }: IRequest): Promise<IResponse> {

    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new AppError("User not found");
    }

    const emailAlreadyInUse = await User.findOne({ where: { email } });
    if (emailAlreadyInUse) {
      throw new AppError("Email already in use")
    }

    const passwordHash = await hash(password_hash, 8);

    user.update({
      name,
      avatar,
      biography,
      email,
      password_hash: passwordHash,
    });

    return {
      name,
      avatar,
      biography,
      email,
      password_hash,
    }
  }
}


export { UpdateAccountUseCase }