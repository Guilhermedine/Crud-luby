import { User } from "database/models/User";
import { injectable, inject } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";



@injectable()
class ListAccountsUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository) { }

  async execute(): Promise<User[]> {
    const accounts = await this.usersRepository.list();
    return accounts
  }
}


export { ListAccountsUseCase }
