import { User } from "../../../../database/models/User";
import { injectable, inject } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";



@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository) { }

  async execute({ id }): Promise<User> {
    const user = await this.usersRepository.findById(id)
    if (!user) {
      throw new AppError("User not found", 400);
    }

    await User.destroy({
      where: { id },
    });


    return user
  }
}


export { DeleteUserUseCase }