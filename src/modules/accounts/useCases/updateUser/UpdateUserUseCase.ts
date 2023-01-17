import { injectable, inject } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError"
import { hash } from "bcrypt"
import { IUpdateUserDTO } from "modules/accounts/dtos/IUpdateUserDTO";
import { Car } from "database/models/Car";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository) { }

  async execute(id, { name, avatar, biography, email, password_hash }: IUpdateUserDTO): Promise<Car> {

    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new AppError("User not found");
    }

    const emailAlreadyInUse = await this.usersRepository.findByEmail(email);
    if (emailAlreadyInUse) {
      throw new AppError("Email already in use")
    }

    const passwordHash = await hash(password_hash, 8);

    const result = await this.usersRepository.updateUser(user, {
      name,
      avatar,
      biography,
      email,
      password_hash: passwordHash,
    })

    return result
  }
}


export { UpdateUserUseCase }