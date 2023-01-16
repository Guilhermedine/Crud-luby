import { User } from "../../../../database/models/User";
import { injectable, inject } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";




@injectable()
class LocateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository) { }

  async execute({ id }): Promise<User> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    return user
  }
}


export { LocateUserUseCase }

