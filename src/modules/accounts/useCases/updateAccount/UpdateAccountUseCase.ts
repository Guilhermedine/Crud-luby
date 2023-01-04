import { injectable, inject } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../../../database/models/User";



@injectable()
class UpdateAccountUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository) { }

  async execute(): Promise<void> {
    const { name, avatar, biography, email } = req.body
  }
}


export { UpdateAccountUseCase }